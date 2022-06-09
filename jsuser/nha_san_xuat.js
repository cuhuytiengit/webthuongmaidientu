//(nsx)click thêm - lưu - làm lại
$(".btn_themnsx").click(function(){
    var mansx=$(".txtmansx").val();//lấy giá trị từ ô nhập liệu
    var tennsx=$(".txttennsx").val();
    var sdtnsx=$(".txtsdtnsx").val();
    var diachinsx=$(".txtdiachinsx").val();
    var emailnsx=$(".txtemailnsx").val();
    if(mansx==""){
        alert("Mã nhà sản xuất phải khác khoảng trống!");}
    else if(tennsx==""){
        alert("Tên nhà sản xuất phải khác khoảng trống!");}
    else if(sdtnsx==""||isNumber(sdtnsx)==false){
        alert("Số điện thoai nhà sản xuất phải khác khoảng trống!");}
    else if(diachinsx==""){
        alert("Địa chỉ nhà sản xuất khác phải khoảng trống!");}
    else if(emailnsx==""||validateEmail(emailnsx)==false){
        alert("Email nhà sản xuất khác phải khoảng trống!");}
    else if(emailnsx==""){
        alert("Email nhà sản xuất khác phải khoảng trống!");}
    else{
        alert("Bạn nhập mã nhà sản xuất: " + mansx + " và tên nhà sản xuất: " + tennsx +" và số điện thoại: " + sdtnsx + " và Địa chỉ: " + diachinsx + " và Email: " + emailnsx);}
});
$(".btn_luunsx").click(function(){
    var mansx=$(".txtmansx").val();//lấy giá trị từ ô nhập liệu
    var tennsx=$(".txttennsx").val();
    var sdtnsx=$(".txtsdtnsx").val();
    var diachinsx=$(".txtdiachinsx").val();
    var emailnsx=$(".txtemailnsx").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mansx==""){
        alert("Mã nhà sản xuất phải khác khoảng trống!");}
    else if(tennsx==""){
        alert("Tên nhà sản xuất phải khác khoảng trống!");}
    else if(sdtnsx==""||isNumber(sdtnsx)==false){
        alert("Số điện thoai nhà sản xuất phải khác khoảng trống!");}
    else if(isNumber(sdtnsx)==false)
        alert("Số điện thoại nhà sản xuất không hợp lệ!(không phải là chuỗi số!)")
    else if(diachinsx==""){
        alert("Địa chỉ nhà sản xuất khác phải khoảng trống!");}
    else if(emailnsx==""||validateEmail(emailnsx)==true){
        alert("Email nhà sản xuất khác phải khoảng trống!");}
    else{
        alert('OK roi day, Email nay hop le.' + "Bạn nhập mã nhà sản xuất: " + mansx + " và tên nhà sản xuất: " + tennsx +" và số điện thoại: " + sdtnsx + " và Địa chỉ: " + diachinsx + " và Email: " + emailnsx);}
});
$(".btn_lamlainsx").click(function(){
    var mansx=$(".txtmansx").val("");//THAY giá trị từ ô nhập liệu về mặc định
    var tennsx=$(".txttennsx").val("");
    var sdtnsx=$(".txtsdtnsx").val("");
    var diachinsx=$(".txtdiachinsx").val("");
    var emailnsx=$(".txtemailnsx").val("");
});