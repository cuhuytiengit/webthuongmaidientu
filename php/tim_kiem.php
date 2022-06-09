<?php
require_once("server.php");
$event=$_GET["event"];

switch($event){
    case "timkiem":
        $key=$_GET["key"];
        $mang=array();
        $sql=mysqli_query($conn,"SELECT masp,tensp,imgnuocuong,giaban FROM `san_pham` WHERE tensp like '%".$key."%' OR giaban like '%".$key."%'");
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['masp'];
            $usertemp['masp']=$rows['masp'];
            $usertemp['tensp']=$rows['tensp'];
            $usertemp['imgnuoc']=$rows['imgnuocuong'];
            $usertemp['giaban']=$rows['giaban'];
            $mang[$id]=$usertemp;
        }
        $jsonData['items'] =$mang;
        echo json_encode($jsonData);
        mysqli_close($conn);
    break;
    default:
    break;
}
?>