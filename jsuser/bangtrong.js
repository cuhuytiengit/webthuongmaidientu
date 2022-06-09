//Hiển thị dữ liệu san_pham lấy JSON từ server
function builddssanpham(page,record) {
   
    var dataSend={
		event:"getDSSanPham",
		page:page,
        record:record
    }
    
    $(".listdssanpham").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/bangtrong.php",dataSend,function (res) {
            $(".listdssanpham").html("");
            buildHTMLsanphamData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallsanpham;
function buildHTMLsanphamData(res) {
    if(res.total==0){
         $(".listdssanpham").html("Chưa có nội dung");
         
    }else{
    var data = res.items;

    resallsanpham=data;
    var stt=1;
    var currentpage=parseInt(res.page);
    stt=printSTT(recordsanpham,currentpage);
    var html='';
    var vt=0;
    for (item in data) {
        var list=data[item];
        if(list.giamgia > 0){
            html=html +
            '<div class="box_user">'+
            '<img class="nuoc" align="center" src="./nuocsuoi/'+list.imgnuoc+'"/><p>&nbsp;</p>'+
            '<center class="font_white font_name"><b>'+list.tensp+'</b></center>'+
            '<center><del class="font_lightblue">'+list.giagoc+'đ</del>&nbsp;<b class="font_yellow">'+list.giaban+
            'đ</b><span class="font_lightgreen">(-'+list.giamgia+'%)</span></center>'+
                '<div align="center"  data-maspds='+list.masp+' data-tenspds='+list.masp+'>'+
                    '<button type="button" class="btn btn-round btn-danger btn_themgiohang font_white">'+
                    'Thêm vào giỏ'+
                    '</button>'+
                    '&nbsp;'+
               '</div>'+
           '</div>';
        stt++;

        $(".listdssanpham").html(html);
        }else{
            html=html +
            '<div class="box_user">'+
               '<img class="nuoc" align="center" src="./nuocsuoi/'+list.imgnuoc+'"/><p>&nbsp;</p>'+
               '<center class="font_white font_name"><b>'+list.tensp+'</b></center>'+
               '<center><b class="font_yellow">'+list.giaban+'đ</b></center>'+
               '<div align="center" data-maspds='+list.masp+' data-tenspds='+list.masp+'>'+
                    '<button type="button" class="btn btn-round btn-danger btn_themgiohang font_white">'+
                    'Thêm vào giỏ'+
                    '</button>'+
                    '&nbsp;'+
               '</div>'+
           '</div>';
        stt++;

        }
        
        $(".listdssanpham").html(html);
         
    }
    buildSlidePage($(".pagenumbersanpham"),5,res.page,res.totalpage);
    }
}

var sanpham_current=0;
$(".pagenumbersanpham").on('click','button',function () {
    
    sanpham_current=$(this).val();
    builddssanpham($(this).val(),recordsanpham);
    
});

// $(".listdstheloai").on('click',".click_sua_the_loai",function () {
//   var matl=($(this).parents("tr").attr("data-matl"));
//   $(".txtmatl").val(resalltheloai[matl].matl);
//   $(".txttentl").val(resalltheloai[matl].tentl);
//   });

//thêm sản phẩm vào giỏ hàng
$(".listdssanpham").on('click','.btn_themgiohang',function(){
    var masp=($(this).parents("div").attr("data-maspds"));
    masp=resallsanpham[masp].masp;
    tensp=resallsanpham[masp].tensp;
    imgnuoc=resallsanpham[masp].imgnuoc;
    giaban=resallsanpham[masp].giaban;
    soluong=1;
    var datasend={
        event:"insert",
        masp:masp,
        tensp:tensp,
        imgnuoc:imgnuoc,
        giaban:giaban,
        soluong:soluong
    }
    queryDataGET_JSON("php/gio_hang.php",datasend,function(res){
        console.log(res);
        if(res["insert"]==1){
            alert_success("Thêm thành công vào giỏ hàng!");
        }
        else{
            alert_error("Mặt hàng đã có trong giỏ!");}
    });
});