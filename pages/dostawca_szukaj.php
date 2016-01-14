
<?php

$connection = mysqli_connect("localhost","root","","baza") or die("Error " . mysqli_error($connection));
$nazwa= strip_tags(trim($_GET['q']));

//fetch department names from the department table
$sql = "SELECT id,nazwa FROM klienci where nazwa LIKE '%$nazwa%' and dostawca = TRUE ";
$result = mysqli_query($connection, $sql) or die("Error " . mysqli_error($connection));

$dname_list = array();
while($row = mysqli_fetch_array($result))
{
    $dname_list[] = array('id'=>(int)$row['id'],'text'=>$row['nazwa']);
}
echo json_encode($dname_list);
?>


