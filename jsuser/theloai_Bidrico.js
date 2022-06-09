//Hiển thị dữ liệu san_pham lấy JSON từ server
function builddsBidrico(page,record) {
   
    var dataSend={
		event:"getDSBidrico",
		page:page,
        record:record
    }
    
    $(".listdsBidrico").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/theloai_Bidrico.php",dataSend,function (res) {
            $(".listdsBidrico").html("");
            buildHTMLBidricoData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallBidrico;
function buildHTMLBidricoData(res) {
    if(res.total==0){
         $(".listdsBidrico").html("Chưa có nội dung");
         
    }else{
     var data = res.items;
    
     resallBidrico=data;
     var stt=1;
    var currentpage=parseInt(res.page);
     stt=printSTT(recordBidrico,currentpage);
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

        $(".listdsBidrico").html(html)
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

        $(".listdsBidrico").html(html)
        }
       
         
    }
    buildSlidePage($(".pagenumberBidrico"),5,res.page,res.totalpage);
    }
}

var Bidrico_current=0;
$(".pagenumberBidrico").on('click','button',function () {
    
    Bidrico_current=$(this).val();
    builddsBidrico($(this).val(),recordBidrico);
    
});

$(".listdsBidrico").on('click','.btn_themgiohang',function(){
    var masp=($(this).parents("div").attr("data-maspds"));
    masp=resallBidrico[masp].masp;
    tensp=resallBidrico[masp].tensp;
    imgnuoc=resallBidrico[masp].imgnuoc;
    giaban=resallBidrico[masp].giaban;
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