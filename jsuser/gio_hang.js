
//Hiển thị dữ liệu san_pham lấy JSON từ server
function builddsgiohang(page,record) {
   
    var dataSend={
		event:"getDSGioHang",
		page:page,
        record:record
    }
    
    $(".listdsgiohang").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/gio_hang.php",dataSend,function (res) {
            $(".listdsgiohang").html("");
            buildHTMLgiohangData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallgiohang;
function buildHTMLgiohangData(res) {
    if(res.total==0){
         $(".listdsgiohang").html("<p>&nbsp;</p><p align='center' class='font_yellow'>Bạn chưa thêm sản phẩm nào...</p>");
         
    }else{
    var data = res.items;
    resallgiohang=data;
    var stt=1;
    var currentpage=parseInt(res.page);
    stt=printSTT(recordgiohang,currentpage);
    var html='';
    var vt=0;
    for (item in data) {
      var list=data[item];
          html=html +
          '<tr class="font_giohang" data-maspgh='+list.masp+' data-namegh'+list.masp+'>' +
          '<td class="txtmaspgh is-hidden">' + list.masp + '</td>' +
          '<td><button class="btn btn-round btn_xoa_spgh"><b>x</b></button>&nbsp;'+
          '<img width="100px" height="100px" align="center" src="./nuocsuoi/'+
          list.imgnuoc+'"/>&#09;<b>' + list.tensp + '</b></td>' +
          '<td class="giabangh"><b>' + list.giaban + '</b></td>'+
          '<td>'+
          '<div class="buttons_added">'+
          '<input class="minus is-form btn_changedown_soluong" type="button" value="-">'+
          '<input aria-label="quantity" class="input-qty change_soluong" max="99" min="1" name="" type="number" value="' + list.soluong + '">'+
          '<input class="plus is-form btn_changeup_soluong" type="button" value="+">'+
          '</div>'+
          '</td>'+
          '<td class="tamtinhgh"><b>' + list.tamtinh + '</b></td>'+
          '</tr>';
      stt++;
    }
    $(".listdsgiohang").html(html);
    buildSlidePage($(".pagenumbergiohang"),5,res.page,res.totalpage);
    }
}



var giohang_current=0;
$(".pagenumbergiohang").on('click','button',function () {
    
    giohang_current=$(this).val();
    builddsgiohang($(this).val(),recordgiohang);
    
});

// function thanhtien(){
//     var datasend={
//         event:"thanhtoan",
//     }
//     queryDataGET_JSON("php/gio_hang.php", datasend, function(res){
//         console.log(res);
//         $(".thanh_toan").val(res);
//     });
// }

//BUTTON tăng số lượng
$(".listdsgiohang").on('click',".btn_changeup_soluong", function(){
  var masp=($(this).parents("tr").attr("data-maspgh"));
  masp=resallgiohang[masp].masp;
  giaban=resallgiohang[masp].giaban;
  soluong=resallgiohang[masp].soluong;
  soluong++;
  $(".change_soluong").val(soluong);
  var dataSend = {
    event: "updatecol",
    masp: masp,
    giaban:giaban,
    soluong:soluong
  }
  queryDataGET_JSON("php/gio_hang.php",dataSend,function(res){
    console.log(res);
  });
  builddsgiohang(0,recordgiohang);
  builddsthanhtien();
  
});

//BUTTON tăng giảm số lượng
$(".listdsgiohang").on('click',".btn_changedown_soluong", function(){
  var masp=($(this).parents("tr").attr("data-maspgh"));
  masp=resallgiohang[masp].masp;
  giaban=resallgiohang[masp].giaban;
  soluong=resallgiohang[masp].soluong;
  if(soluong > 1){
    soluong--;
    $(".change_soluong").val(soluong);
    var dataSend = {
      event: "updatecol",
      masp: masp,
      giaban:giaban,
      soluong: soluong
    }
    queryDataGET_JSON("php/gio_hang.php",dataSend,function(res){
      console.log(res);
    });
    builddsgiohang(0,recordgiohang);
    builddsthanhtien();
  }
  
});

// $(".listdstheloai").on('click',".click_sua_the_loai",function () {
//   var matl=($(this).parents("tr").attr("data-matl"));
//   $(".txtmatl").val(resalltheloai[matl].matl);
//   $(".txttentl").val(resalltheloai[matl].tentl);
//   });
$('.listdsgiohang').on('click',".btn_xoa_spgh",function(){
  var masp=($(this).parents("tr").attr("data-maspgh"));
  masp=resallgiohang[masp].masp;
  bootbox.confirm("Bạn có chắc xóa sản phẩm có masp trong giỏ hàng: '" + masp + "' ?",
  function(result){
    if(result==true)
    {
      var datasend={
          event:"delete",
          masp:masp
      }
      queryDataGET_JSON("php/gio_hang.php",datasend,function(res){
          console.log(res);
          if(res["delete"]==1){
              alert_success("Xóa thành công");
              builddsgiohang(giohang_current,recordgiohang);
              builddsthanhtien();
          }
          else{
              alert_error("Xóa không thành công");}
      });
    }
  });
});

//Hiển thị dữ liệu san_pham lấy JSON từ server

function builddsthanhtien() {
   
  var dataSend={
  event:"tinhTong"
  }
  queryDataGET_JSON("php/gio_hang.php",dataSend,function (res) {
    $(".thanh_tien").val(res.tongtien);
          //alert_info("Đã lấy được dữ liệu " + res);
  });
}
