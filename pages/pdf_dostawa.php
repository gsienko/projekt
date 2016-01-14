<?php
require_once '../class/database.php';
//require_once '../function/naglowek.php';
$database = new sqlService;
$database->sqlConnect();
//$database->sqlQuery("SELECT * FROM faktury WHERE ID IN (SELECT MAX(ID) FROM faktury)");
$database->sqlQuery("select kontrahent_id,netto,brutto,zaplacono from zakupy where zakupy.id = " . $_GET["id"]);
$kontrahent = $database->sqlResult();

$database->sqlQuery("select klienci.nazwa, klienci.adres, klienci.kod_pocztowy, klienci.miasto, klienci.nip, klienci.termin_platnosci from klienci,zakupy where klienci.id = " . $kontrahent[0] . " AND klienci.id = zakupy.kontrahent_id and zakupy.id = " . $_GET["id"] . "");
$klient = $database->sqlResult();

$database->sqlQuery("select numer_partii from zakupy where zakupy.id = " . $_GET["id"]);
$numer_partii = $database->sqlResult();
$database->sqlQuery("select data_wystawienia from zakupy where zakupy.id = " . $_GET["id"]);
$data_wystawienia = $database->sqlResult();
$database->sqlQuery("select netto from zakupy where zakupy.id = " . $_GET["id"]);
$netto = $database->sqlResult();
$database->sqlQuery("select brutto from zakupy where zakupy.id = " . $_GET["id"]);
$brutto = $database->sqlResult();
$razem_vat = $brutto[0]-$netto[0];


$host = 'localhost';
$db = 'baza';
$user = 'root';
$password = '';
$conn = new PDO("mysql:host={$host};dbname={$db}", $user, $password,
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

$dane = $conn->prepare("select * from `produkty_zakupy` where id_faktury = " . $_GET["id"]);
$dane->execute();
$result = $dane->fetchAll(PDO::FETCH_ASSOC);


//echo '<pre>';
//print_r($result);
//echo '</pre>';

$database->sqlClose();
?>


<!DOCTYPE html>
<!--
  Invoice template by invoicebus.com
  To customize this template consider following this guide https://invoicebus.com/how-to-create-invoice-template/
  This template is under Invoicebus Template License, see https://invoicebus.com/templates/license/
-->
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <title>Faktura nr <?php echo $_GET["id"] . "/2016"; ?></title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Invoicebus Invoice Template">
    <meta name="author" content="Invoicebus">

    <meta name="template-hash" content="91216e926eab41d8aa403bf4b00f4e19">

    <link rel="stylesheet" href="/lib/html/css/template.css">
</head>
<body>
<div id="container">
    <div class="left-stripes">
        <div class="circle c-upper"></div>
        <div class="circle c-lower"></div>
    </div>
    <div class="right-invoice">
        <section id="memo">
            <div class="company-info">
                <div>ZPM Dystrybucja Grzegorz Sieńko</div>
                <br>
                <span>ul. Eugeniusza Kwiatkowskiego</span>
                <span>40-824 Katowice</span>
                <br>
                <span>+48 883-920-922</span>
                <br>
                <span>www.zpmdystrybucja.pl</span>
                <br>
                <span>NIP: 634-282-15-59</span>
            </div>



        </section>

        <section id="invoice-title-number">

            <div class="title-top">

                <span><?php echo "Data sprzedaży: ".$data_wystawienia[0]; ?></span>
            </div>

            <div id="title">Dokument dostawy nr <?php echo $_GET["id"] . "/2016"; ?></div>

        </section>

        <section id="client-info">
            <span>Klient</span>
            <div class="client-name">
                <span><?php echo $klient[0]; ?></span>
            </div>

            <div>
                <span><?php echo $klient[1]; ?></span>
            </div>

            <div>
                <span><?php echo $klient[2] . ' ' . $klient[3] ?></span>
            </div>
            <div>
                <span>NIP: <?php echo $klient[4]; ?></span>
            </div>

        </section>

        <div class="clearfix"></div>

        <section id="invoice-info">
            <div>
                <span>Termin płatności: </span> <span><?php echo $klient[5]; ?> dni</span>
            </div>

        </section>

        <div class="clearfix"></div>

        <div class="currency">
            <span>Waluta</span> <span>PLN</span>
        </div>

        <section id="items">

            <table cellpadding="0" cellspacing="0">

                <tr>
                    <th>Lp.</th>
                    <th></th>
                    <th>Artykuł</th>
                    <th>Ilość</th>
                    <th>Jednostka</th>
                    <th>Cena netto</th>
                    <th>Cena brutto</th>
                    <th>VAT</th>
                    <th>Razem</th>
                </tr>
                <?php

                $database = new sqlService;
                $database->sqlConnect();
                $database->sqlQuery("SELECT COUNT(*) FROM `produkty_zakupy` WHERE id_faktury = " . $_GET["id"]);
                $ile = $database->sqlResult();
                for ($i=0;$i<$ile[0];$i++) {
                    $tmp = $i+1;
                    $database->sqlQuery("select produkty.nazwa from produkty where produkty.id = " . $result[$i]['id_produktu']);
                    $nazwa = $database->sqlResult();
                    $database->sqlQuery("SELECT vat FROM baza.produkty WHERE produkty.id = " . $result[$i]['id_produktu']);
                    $vat = $database->sqlResult();
                    // "SELECT vat FROM baza.produkty WHERE produkty.id = 1";
                    $numer_partii = $database->sqlResult();
                    // echo "{$result[$i]['id_produktu']} - {$result[$i]['ilosc']} {$result[$i]['cena_netto']} <br>";
                    $razem = $result[$i]['cena_netto']*1.05*$result[$i]['ilosc'] ;
                    echo '<tr>';
                    echo ' <td>' . $tmp . '<td> ';
                    echo ' <td>'. $nazwa[0] .'</td>';
                    echo ' <td>' . $result[$i]['ilosc'] . '</td>';
                    echo '<td>kg</td>';
                    echo '<td>' . $result[$i]['cena_netto'] . '</td>';
                    echo '<td>' . $result[$i]['cena_netto']*1.05 . '</td>';
                    echo '<td>' . $vat[0] . '</td>';
                    echo '<td>'. $razem.'</td>';
                    echo '</tr>';
                }
                ?>
            </table>

        </section>

        <section id="sums">

            <table cellpadding="0" cellspacing="0">

                <tr class="amount-total">
                    <td colspan="2"><?php echo $kontrahent[2] ?> zł</td>
                </tr>

                <tr data-hide-on-quote="true">
                    <th>Zapłacono:</th>
                    <td><?php echo $kontrahent[3]; ?> zł</td>
                </tr>

                <tr data-hide-on-quote="true" class="due-amount">
                    <th>Pozostaje:</th>
                    <td><?php echo $kontrahent[2] - $kontrahent[3]; ?> zł</td>
                </tr>

            </table>

        </section>

        <div class="clearfix"></div>





    </div>
</div>
<script src="http://cdn.invoicebus.com/generator/generator.min.js?data=data.js"></script>

</body>
</html>


