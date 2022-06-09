$(".btn_dathang").click(function(){
    console.log("click button đặt hàng!");
    var kiemtrathanhtien=$(".thanh_tien").val();
    if(kiemtrathanhtien=='0')
        alert_info("Bạn chưa có món hàng nào trong giỏ hàng!");
    else{
        //dữ liệu để lấy mã
        var makhpay=0;
        var madhpay=0;
        //dữ liệu cho kiểm tra hợp lệ để insert
        var tenpay=$(".txthotenpay").val();//lấy giá trị từ ô nhập liệu
        var sdtpay=$(".txtsdtpay").val();
        var diachipay=$(".txtdiachipay").val();
        var emailpay=$(".txtemailpay").val();
        //dataSend để lấy mã
        var dataSendgetmakh={
            event:"getDSkhachhangpay"
        }
        var dataSendgetmadh={
            event:"getDSdonhangpay"
        }
        
        
        queryDataGET_JSON("php/thanh_toan.php",dataSendgetmakh,function (res) {
            var data = res.total;
            makhpay = ++data;
            if(tenpay==""){
                alert_info("Tên của bạn phải khác khoảng trống!");}
            else if(sdtpay==""||isNumber(sdtpay)==false){
                alert_info("Số điện thoai của bạn không hợp lệ!");}
            else if(diachipay==""){
                alert_info("Địa chỉ của bạn khác phải khoảng trống!");}
            else if(emailpay==""||validateEmail(emailpay)==false){
                alert_info("Email của bạn không hợp lệ!");}
            else{
                var dataSendkhgh={
                    event:"insert1",
                    makhpay:makhpay,
                    tenpay:tenpay,
                    sdtpay:sdtpay,
                    diachipay:diachipay,
                    emailpay:emailpay
                }
                
                queryDataGET_JSON("php/thanh_toan.php", dataSendkhgh, function(res){
                    console.log(res);
                    if(res["insert1"]==1){
                        alert_info("Đã nhận khách hàng!");
                    }
                    else{
                        alert_error("Nhận khách hàng thất bại!");
                    }
                });
            }
                //alert_info("Đã lấy được dữ liệu " + res);
        });
        
        queryDataGET_JSON("php/thanh_toan.php",dataSendgetmadh,function (res) {
            var data = res.total;
            madhpay = ++data;
                //alert_info("Đã lấy được dữ liệu " + res);
            if(tenpay==""){
                alert_info("Tên của bạn phải khác khoảng trống!");}
            else if(sdtpay==""||isNumber(sdtpay)==false){
                alert_info("Số điện thoai của bạn không hợp lệ!");}
            else if(diachipay==""){
                alert_info("Địa chỉ của bạn khác phải khoảng trống!");}
            else if(emailpay==""||validateEmail(emailpay)==false){
                alert_info("Email của bạn không hợp lệ!");}
            else{
                var dataSenddhgh={
                    event:"insert2",
                    makhpay:makhpay,
                    madhpay:madhpay
                }
                queryDataGET_JSON("php/thanh_toan.php", dataSenddhgh, function(res){
                    console.log(res);
                    if(res["insert2"]==1){
                        alert_info("Đã nhận đơn hàng!");
                        var dataSendDeletegh={
                            event:"deletedbgh"
                        }
                        queryDataGET_JSON("php/gio_hang.php", dataSendDeletegh, function(res){
                            console.log(res);
                            $(".thanh_tien").val("");
                        });
                    }
                    else{
                        alert_error("Nhận đơn hàng thất bại!");
                    }
                });
                
            }
        });
    }
});

$(".btn_credit").click(function(){
    $(".txtcredit").removeClass("is-hidden");
    $(".txtcash").addClass("is-hidden");
});
$(".btn_cash").click(function(){
    $(".txtcash").removeClass("is-hidden");
    $(".txtcredit").addClass("is-hidden");
});
