<style>
    #myModal .modal-dialog {
        width: 100%;
        height: 100%;
        overflow: visible;
    }

    .modal-dialog,
    .modal-content {
        /* 80% of window height */
        height: 80%;
    }

    .modal-body {
        /* 100% = dialog height, 120px = header + footer */
        max-height: calc(100% - 120px);
        overflow-y: scroll;
    }

</style>
<?php
require_once '../class/database.php';
require_once '../function/naglowek.php';
$foo = new sqlService;
$foo->sqlConnect();
//print"<pre>";
//var_dump($_POST);
//print "</pre>";
if ($_SERVER["REQUEST_METHOD"] == "POST" && !EMPTY($_POST)) {

    $foo->sqlZakupy($_POST);
    $i = 0;
    $i2 = 0;
    $produkt[] = 0;
    $netto[] = 0;
    $ilosc[] = 0;
    $zapytanie = '';
    while(!EMPTY($_POST['product'][$i]))
    {
        $i2=$i2+2;
        $produkt[$i] = $_POST['product'][$i];
        $ilosc[$i] =$_POST['ilosc_'.$i2];
        $netto[$i] =$_POST['netto_'.$i2];
        $zapytanie=$zapytanie.'('.$_POST['id_faktury'].','.$produkt[$i].','.$ilosc[$i].','.$netto[$i].') ';
        if (!EMPTY($_POST['product'][$i+1]))
        {
            $zapytanie=$zapytanie.',';
        }
        $i++;
    }

    $zapytanie_produkt_faktura = 'INSERT INTO `baza`.`produkty_zakupy` (`id_faktury`, `id_produktu`, `ilosc`, `cena_netto`) VALUES '.$zapytanie;

    $foo ->sqlQuery($zapytanie_produkt_faktura);


}
$zapytanie2 = new sqlService;
$zapytanie2->sqlConnect();

$foo->sqlQuery("SELECT * FROM zakupy limit 30");
if ($foo->sqlRows() > 0) {

    echo '<div class="panel panel-default">  <div class="panel-heading">Dostawy</div>
<div class="panel-body">
<table class="table"><thead> <tr> <th>#</th> <th>Kontrahent</th> <th>Data zakupu</th> <th>Netto</th> <th>Brutto</th> <th>Zapłacono</th> <th> Generuj PDF</th><th> Płatność</th> </tr> </thead> <tbody><tr>';

    while ($row = $foo->sqlResult()) {
        $zapytanie2->sqlQuery("select klienci.nazwa from klienci,zakupy where klienci.id = " . $row["kontrahent_id"] . " AND klienci.id = zakupy.kontrahent_id and zakupy.id = " . $row["id"] . "");
        $tmp = $zapytanie2->sqlResult();
        //  echo "select klienci.nazwa from klienci,faktury where klienci.id = ". $row["kontrahent_id"] ." AND klienci.id = faktury.kontrahent_id and faktury.id = ". $row["id"]."";
        echo '<th scope="row">' . $row["id"] . '/2016/FV</th> <td>' . $tmp[0] . '</td> <td>' . $row["data_sprzedazy"] . '</td> <td>' . $row["netto"] . ' zł' . '</td> <td>' . $row["brutto"] . ' zł' . '</td> <td>' . $row["zaplacono"] . ' zł' . '</td><td><a href="/pages/pdf_dostawa.php?id=' . $row["id"] . '"><i class="fa fa-pencil"> Generuj</i></a></td> <td>

		<a href="#zaplac"><i class="fa fa-money"> Płatność</i></td> <td></a>
		</a></td></td> </tr> <tr>
';
    };
    echo '</div>';
}
$foo->sqlClose();


echo ' </tbody>
</table> </div>';
echo ' <!-- Button trigger modal -->
 <a href="dokumenty_nowy.php">
<button type="button" class="btn btn-primary btn-lg">
  Dodaj nowy
</button></a>';//a

?>
<script type="text/javascript">


</script>
