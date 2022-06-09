//Javascript Document
//alert("hello")
//bắt sự kiện click
//viết hàm trong javascript
//main: form_theloai,
var recordsanpham=10;
var recordAquafina=10;
var recordBidrico=10;
var recordIonLife=10;
var recordLavie=10;
var recordVinhHao=10;
var recordsplq=10;
var recordgiohang=100;


function swapmain (main) {
    $(".form_ttbt").addClass("is-hidden");
    $(".form_tttlAquafina").addClass("is-hidden");
    $(".form_tttlBidrico").addClass("is-hidden");
    $(".form_tttlIonLife").addClass("is-hidden");
    $(".form_tttlLavie").addClass("is-hidden");
    $(".form_tttlVinhHao").addClass("is-hidden");
    $(".form_tttlsplq").addClass("is-hidden");
    $(".form_giohang").addClass("is-hidden");
    $(".form_thanhtoan").addClass("is-hidden");
    $(".form_trangchu").addClass("is-hidden");
    $("."+main).removeClass("is-hidden");//+main: nối chuỗi tên của main(tên form nhập ở trong () khi gọi swapmain()
    
}
$(".form_trangchu").load(function(){
    builddssanpham(0,recordsanpham);
})
$(".menu_bangtrong").click(function(){
    console.log("click menu Danh sách sản phẩm");
    swapmain("form_ttbt");
    var html='<li align="center"><h1>'+
    'Danh sách sản phẩm</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddssanpham(0,recordsanpham);
});
$(".menu_nuocsuoiAquafina").click(function(){
    console.log("click menu Aquafina")
    swapmain("form_tttlAquafina")
    var html='<li align="center"><h1>'+
    'Nước suối Aquafina</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsAquafina(0,recordAquafina);
});
$(".menu_nuocsuoiBidrico").click(function(){
    console.log("click menu Bidrico")
    swapmain("form_tttlBidrico")
    var html='<li align="center"><h1>'+
    'Nước suối Bidrico</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsBidrico(0,recordBidrico);
});
$(".menu_nuocsuoiIonLife").click(function(){
    console.log("click menu IonLife")
    swapmain("form_tttlIonLife")
    var html='<li align="center"><h1>'+
    'Nước suối Ion-Life</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsIonLife(0,recordIonLife);
});
$(".menu_nuocsuoiLavie").click(function(){
    console.log("click menu Lavie");
    swapmain("form_tttlLavie");
    var html='<li align="center"><h1>'+
    'Nước suối Lavie</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsLavie(0,recordLavie);
});
$(".menu_nuocsuoiVinhHao").click(function(){
    console.log("click menu Vĩnh Hảo");
    swapmain("form_tttlVinhHao");
    var html='<li align="center"><h1>'+
    'Nước suối Vĩnh Hảo</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsVinhHao(0,recordVinhHao)
});
$(".menu_sanphamlienquan").click(function(){
    console.log("click menu sản phẩm liên quan!");
    swapmain("form_tttlsplq");
    var html='<li align="center"><h1>'+
    'Sản phẩm liên quan</h1></li>';
    $(".titlebreadcrumb").html(html);
    builddssplq(0,recordsplq)
});
$(".menu_giohang").click(function(){
    console.log("click menu giỏ hàng");
    swapmain("form_giohang");
    var html='<li align="center" class="font_blue"><h1><b>'+
    'Giỏ hàng của bạn</b></h1></li>';
    $(".titlebreadcrumb").html(html);
    builddsgiohang(0,recordgiohang);
    builddsthanhtien();
});
$('.btn_thanhtoan').click(function(){
    console.log("click button thanh toán")
    swapmain("form_thanhtoan");
    var html='<li align="center" class="font_blue"><h1><b>'+
    'Form thanh toán</b></h1></li>';
    $(".titlebreadcrumb").html(html);
});



$(".menu_nsx").click(function(){
    console.log("click menu nhà sản xuất");
    swapmain("form_nhasanxuat");
    var html='<li><a href="#">'+
    '<i class="fa fa-home"></i>'+
    'Trang chủ</a></li>'+
    '<li class="active">Thể loại</li>';
    $(".titlebreadcrumb").html(html);
});
$(".menu_tg").click(function(){
    console.log("click menu tác giả");
    swapmain("form_tacgia");
    var html='<li><a href="#">'+
    '<i class="fa fa-home"></i>'+
    'Trang chủ</a></li>'+
    '<li class="active">Thể loại</li>';
    $(".titlebreadcrumb").html(html);
});
$(".menu_nuocsuoi").click(function(){
    console.log("click menu sách");
    swapmain("form_sach");
    var html='<li><a href="#">'+
    '<i class="fa fa-home"></i>'+
    'Trang chủ</a></li>'+
    '<li class="active">Thể loại</li>';
    $(".titlebreadcrumb").html(html);
});
$(".menu_ddh").click(function(){
    console.log("click menu tác giả");
    swapmain("form_thongtindonhang");
    var html='<li><a href="#">'+
    '<i class="fa fa-home"></i>'+
    'Trang chủ</a></li>'+
    '<li class="active">Đơn đặt hàng</li>';
    $(".titlebreadcrumb").html(html);
});



//swapmain("form_thongtintheloai");
//swapmain("form_tacgia");

$(".listallddh").on('click',".btn_xulydh",function(){
    console.log("click button xử lý đơn hàng");
    //gọi hàm swapmain
    $(".showxulydh").modal("show");
});

$(".listallddh").on('click',".btn_xoadh",function(){
    //gọi hàm swapmain
    bootbox.confirm("Bạn có chắc xóa đơn hàng", function(result){
        if(result==true)//Nếu nhấn ok
        {
            console.log("Bạn đã chọn ok!");
        }
        else//Nếu nhấn cancel
        {}
    })
});





//kiểm tra email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

//kiểm tra toàn bộ là số
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

//Hàm được gọi khi thao tac that bai
function alert_error(mes){
    bootbox.alert({
        size: "small",
        title: "<span style = 'color: red'>Thất bại</span>",
        message: mes,
        callback: function(){/* your callback code */}
    });
}
//Ham duoc goi khi thao tac thanh cong
function alert_success(mes, callback){
    bootbox.alert({
        size: "small",
        title: "Thành công",
        message: mes,
        callback: callback
    });
}
//Ham duoc goi khi thao tac nhac nho user
function alert_info(mes){
    bootbox.alert({
        size: "small",
        title: "Thông báo",
        message: mes,
        callback: function(){/* your callback code */}
    });
}

function queryDataGET(url, dataSend, callback){
    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async:true,
        dataType: 'text',
        success:callback
    })
}
function queryDataGET_TEXT(url, dataSend, callback){
    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async:true,
        dataType: 'text',
        success:callback
    })
}
function queryDataPOST_TEXT(url, dataSend, callback){
    $.ajax({
        type: 'POST',
        url: url,
        data: dataSend,
        async:true,
        dataType: 'text',
        success:callback
    })
}
function queryDataGET_JSON(url, dataSend, callback){
    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async:true,
        dataType: 'JSON',
        success:callback
    });
}

//Hàm hiển thị số thứ tự trong table
function printSTT(record,pageCurr){
    if ((pageCurr+1)==1) {
        return 1;
    }else{
        return record*(pageCurr+1)-(record-1);
    }
}

function buildSlidePage(obj,codan,pageActive,totalPage) {
    var html="";
    pageActive=parseInt(pageActive);
    for(i = 1 ; i <=codan; i++) {
        if(pageActive-i<0) break;
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">'+(pageActive-i+1)+'</button>'+html;
    }
    if(pageActive>codan){
        html='<button type="button" class="btn btn-outline btn-default" value="'+(pageActive-i)+'">...</button>'+html;
    }
    html+='<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="'+pageActive+'">'+(pageActive+1)+'</button>';
    for(i = 1 ; i <=codan; i++){
        if(pageActive+i>=totalPage) break;
        html=html+'<button  type="button" class="btn btn-outline btn-default" value="'+(pageActive+i)+'">'+(pageActive+i+1)+'</button>';
    }
    if(totalPage-pageActive>codan+1){
        html=html+'<button type="button" value="'+(pageActive+i)+'" class="btn btn-outline btn-default">...</button>';
    }
    obj.html(html);
}

// $(".listdstheloai").on('click',".click_sua_the_loai",function () {
//   var matl=($(this).parents("tr").attr("data-matl"));
//   $(".txtmatl").val(resalltheloai[matl].matl);
//   $(".txttentl").val(resalltheloai[matl].tentl);
//   });