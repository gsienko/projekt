<?php
/**
 * Created by PhpStorm.
 * User: Grzegorz Sieńko
 * Date: 2016-01-06
 * Time: 18:49
 */
require_once '../class/database.php';
require_once '../function/naglowek.php';
$data = new datetime();
if($_SERVER["REQUEST_METHOD"]=="GET" && !EMPTY($_GET["id"]) )
{
    $database = new sqlService;
    $database -> sqlConnect();
    $database -> sqlQuery("SELECT * FROM faktury where id=".$_GET["id"]." LIMIT 1 ");
    $get = $database -> sqlResult();

}

?>