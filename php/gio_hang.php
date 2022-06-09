<?php
require_once("server.php");
$event=$_GET['event'];

switch($event){
    case "insert":
        $masp=$_GET['masp'];
        $tensp=$_GET['tensp'];
        $imgnuoc=$_GET['imgnuoc'];
        $giaban=$_GET['giaban'];
        $soluong=$_GET['soluong'];
        $tamtinh=$giaban*$soluong;

        $sql="INSERT INTO `gio_hang` (masp,tensp,imgnuocuong,giaban,soluong,tamtinh) 
        VALUES('".$masp."','".$tensp."','".$imgnuoc."','".$giaban."','".$soluong."','".$tamtinh."')";
        if (mysqli_query($conn, $sql)){
            $res[$event] = 1;
        }else{
            $res[$event] = 0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    
    case "delete":

        $masp=$_GET['masp'];

        $sql="DELETE FROM `gio_hang` WHERE masp='".$masp."'";
        mysqli_query($conn, $sql);
        if (mysqli_affected_rows($conn)>0){
            $res[$event]=1;
        }else{
            $res[$event]=0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "deletedbgh":

        $sql="DELETE FROM `gio_hang`";
        mysqli_query($conn, $sql);
        if (mysqli_affected_rows($conn)>0){
            $res[$event]=1;
        }else{
            $res[$event]=0;
        }
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "update":
        $soluong=$_GET['soluong'];
        $giaban=$_GET['giaban'];
        $tamtinh=$giaban*$soluong;
            $sql="UPDATE  `gio_hang` SET tensp='".$tensp.
            "',imgnuocuong='".$imgnuoc.
            "',giaban='".$giaban.
            "',soluong='".$soluong.
            "',tamtinh='".$tamtinh.
            "'WHERE masp='".$masp."'";
        
            if (mysqli_query($conn, $sql)) {
                $res[$event] = 1;
            } else {
                $res[$event] = 0;
            }
            
            echo json_encode($res);
            mysqli_close($conn);
            break;

    case "updatecol":
        $masp=$_GET['masp'];
        $giaban=$_GET['giaban'];
        $soluong=$_GET['soluong'];
        $tamtinh=$giaban*$soluong;
        $sql="UPDATE `gio_hang` SET soluong='".$soluong."', tamtinh='".$tamtinh."' WHERE masp='".$masp."'";
        if(mysqli_query($conn, $sql)) {
            $res[$event] = 1;
        } else {
            $res[$event] = 0;
        }

        echo json_encode($res);
        mysqli_close($conn);
        break;
        
    case "getDSGioHang":
    
        $mang=array();
        $record=$_GET['record'];
        $page=$_GET['page'];
        $vt=$page*$record;
        $limit='limit '.$vt.' , '.$record;
        $sql=mysqli_query($conn,"SELECT masp,tensp,imgnuocuong,giaban,soluong,tamtinh FROM gio_hang ".$limit); 
        while($rows=mysqli_fetch_array($sql))
        {
            $id=$rows['masp'];
            $usertemp['masp']=$rows['masp'];
            $usertemp['tensp']=$rows['tensp'];
            $usertemp['imgnuoc']=$rows['imgnuocuong'];
            $usertemp['giaban']=$rows['giaban'];
            $usertemp['soluong']=$rows['soluong'];
            $usertemp['tamtinh']=$rows['tamtinh'];
            $mang[$id]=$usertemp;
        }
        $rs=mysqli_query($conn,"SELECT COUNT(*) as 'total' from gio_hang");
        $row=mysqli_fetch_array($rs);
        $jsonData['total'] =(int)$row['total'];
        $jsonData['totalpage'] =ceil($row['total']/$record);
        $jsonData['page'] =(int)$page;
        $jsonData['items'] =$mang;
        
        echo json_encode($jsonData);
        mysqli_close($conn);
            break;

    case "tinhTong":

        $sql=mysqli_query($conn,"SELECT SUM(tamtinh) as 'tongtien' from gio_hang");
        $row=mysqli_fetch_array($sql);
        $jsonData['tongtien']=(int)$row['tongtien'];

        echo json_encode($jsonData);
        mysqli_close($conn);
        break;

    default:
    # code...
    break;
}
?>