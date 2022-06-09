<?php
require_once("server.php");
$event=$_GET['event'];

switch($event){
    case "getDSsplq":
    
        $mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
        $vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"select masp,tensp,imgnuocuong,giagoc,giamgia,giaban from san_pham where masp like '%SPK%'".$limit); 
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['masp'];
            $usertemp['masp']=$rows['masp'];
            $usertemp['tensp']=$rows['tensp'];
            $usertemp['imgnuoc']=$rows['imgnuocuong'];
            $usertemp['giagoc']=$rows['giagoc'];
            $usertemp['giamgia']=$rows['giamgia'];
            $usertemp['giaban']=$rows['giaban'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"SELECT COUNT(*) AS 'total' FROM san_pham WHERE tensp LIKE '%Vĩnh Hảo%'");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
        $jsonData['totalpage'] =ceil($row['total']/$record);
        $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        
        echo json_encode($jsonData);
        mysqli_close($conn);
            break;
        default:
        # code...
        break;
}
?>