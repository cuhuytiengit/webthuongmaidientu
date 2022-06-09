//Hiển thị dữ liệu san_pham lấy JSON từ server
function builddssplq(page,record) {
   
    var dataSend={
		event:"getDSsplq",
		page:page,
        record:record
    }
    
    $(".listdssplq").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/theloai_splq.php",dataSend,function (res) {
            $(".listdssplq").html("");
            buildHTMLsplqData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallsplq;
function buildHTMLsplqData(res) {
    if(res.total==0){
         $(".listdssplq").html("Chưa có nội dung");
         
    }else{
     var data = res.items;
    
     resallsplq=data;
     var stt=1;
    var currentpage=parseInt(res.page);
     stt=printSTT(recordsplq,currentpage);
     var html='';
     var vt=0;
     for (item in data) {
        var list=data[item];
        if(list.giamgia > 0){
            html=html +
            '<div class="box_user">'+
               '<a href="#"><img class="nuoc" align="center" src="./nuocsuoi/'+list.imgnuoc+'"/></a><p>&nbsp;</p>'+
               '<center class="font_white font_name"><b>'+list.tensp+'</b></center>'+
               '<center><del class="font_lightblue">'+list.giagoc+'đ</del>&nbsp;<b class="font_yellow">'+list.giaban+
               'đ</b><span class="font_lightgreen">(-'+list.giamgia+'%)</span></center>'+
               '<div align="center" data-maspds='+list.masp+' data-tenspds='+list.masp+'>'+
                        '<button type="button" class="btn btn-round btn-danger btn_themgiohang font_white">'+
                        'Thêm vào giỏ'+
                        '</button>'+
                    '&nbsp;'+
               '</div>'+
           '</div>';
        stt++;

        $(".listdssplq").html(html)
        }else{
            html=html +
            '<div class="box_user">'+
               '<a href="#"><img class="nuoc" align="center" src="./nuocsuoi/'+list.imgnuoc+'"/></a><p>&nbsp;</p>'+
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

        $(".listdssplq").html(html)
        }
       
         
    }
    buildSlidePage($(".pagenumbersplq"),5,res.page,res.totalpage);
    }
}

var splq_current=0;
$(".pagenumbersplq").on('click','button',function () {
    
    splq_current=$(this).val();
    builddssplq($(this).val(),recordsplq);
    
});

$(".listdssplq").on('click','.btn_themgiohang',function(){
    var masp=($(this).parents("div").attr("data-maspds"));
    masp=resallsplq[masp].masp;
    tensp=resallsplq[masp].tensp;
    imgnuoc=resallsplq[masp].imgnuoc;
    giaban=resallsplq[masp].giaban;
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