<?php
require_once("server.php");
$event=$_GET['event'];

switch($event){
    case "insert1":
        $makhpay=$_GET['makhpay'];
        $tenpay=$_GET['tenpay'];
        $sdtpay=$_GET['sdtpay'];
        $diachipay=$_GET['diachipay'];
        $emailpay=$_GET['emailpay'];

        $sql="INSERT INTO `khach_hang` (makh,tenkh,sdtkh,diachikh,emailkh)
        VALUES('".$makhpay."','".$tenpay."','".$sdtpay."','".$diachipay."','".$emailpay."')";
        if (mysqli_query($conn, $sql)){
            $res[$event] = 1;
        }else{
            $res[$event] = 0;
        }

        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "insert2":
        $madhpay=$_GET['madhpay'];
        $makhpay=$_GET['makhpay'];

        $sql="INSERT INTO `don_dat_hang` (madh,ngaydh,trangthaidh,ngaydukiengiao,ngaythuctegiao,makh,manv)
        VALUES('".$madhpay."',NULL,'0',NULL,NULL,'".$makhpay."','')";
        if (mysqli_query($conn, $sql)){
            $res[$event] = 1;
        }else{
            $res[$event] = 0;
        }

        echo json_encode($res);
        mysqli_close($conn);
        break;

    case "getDSkhachhangpay":
    
        $rs=mysqli_query($conn,"SELECT MAX(makh) as 'total' from khach_hang");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
        
        echo json_encode($jsonData);
        mysqli_close($conn);
            break;
    case "getDSdonhangpay":

        $rs=mysqli_query($conn,"SELECT MAX(madh) as 'total' from don_dat_hang");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
        
        echo json_encode($jsonData);
        mysqli_close($conn);
            break;
        default:
        # code...
        break;
}
?>