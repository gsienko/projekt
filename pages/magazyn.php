<?php
require_once '../class/database.php';
require_once '../function/naglowek.php';
$foo = new sqlService;
$foo->sqlConnect();
if ($_SERVER["REQUEST_METHOD"] == "POST" && !EMPTY($_POST) && EMPTY($_POST['id'])) {
    $q = 'INSERT INTO `baza`.`produkty` (`id`,`nazwa`,`jednostka`,`pkwiu`,`stan`,`vat`,`cena_netto`)
										VALUES (NULL, "' . $_POST['nazwa'] . '", "' . $_POST['jednoska'] . '", "' . $_POST['pkwiu'] . '", "' . $_POST['stan'] . '", "' . $_POST['vat'] . '", "' . $_POST['cena_netto'] . '")';
    $foo->sqlQuery($q);
    echo '<script type="text/javascript">
    $(window).load(function(){
        $(\'#myModal1\').modal(\'show\');
    });
</script>';
//    print"<pre>";
//var_dump($_POST);
//print "</pre>";
}
error_reporting(0);
if ($_SERVER["REQUEST_METHOD"] == "POST" && !EMPTY($_POST) && EMPTY($_POST['wyslij'])) {

    $q = 'UPDATE  `baza`.`produkty` SET
     `nazwa`              = "' . $_POST['nazwa'] . '",
     `jednostka`              = "' . $_POST['jednostka'] . '",
     `pkwiu`       = "' . $_POST['pkwiu'] . '",
     `stan`             = "' . $_POST['stan'] . '",
     `vat`                = "' . $_POST['vat'] . '",
     `cena_netto`           = ' . $_POST['cena_netto'] . ',

     WHERE
     `produkty`.`id` =  ' . $_POST['id'] ;


    $foo->sqlQuery($q);
    echo '<script type="text/javascript">
    $(window).load(function(){
        $(\'#myModal\').modal(\'show\');
    });
</script>';
}

    $foo->sqlQuery("SELECT * FROM produkty");

    if ($foo->sqlRows() > 0) {

        echo '<div class="panel panel-default">  <div class="panel-heading">Magazyn</div>
<div class="panel-body"> 
<table class="table"><thead> <tr> <th>Nazwa</th> <th>Jednostka</th> <th>PKWiU</th> <th>Stan</th><th>Cena netto</th><th>Wartość</th><th>Edycja</th></tr> </thead> <tbody><tr>
';

        while ($row = $foo->sqlResult()) {

            echo ' <td>' . $row["nazwa"] . '</td> <td>' . $row["jednostka"] . '</td> <td>' . $row["pkwiu"] . '</td> <td>' . $row["stan"] . '</td><td>' . $row["cena_netto"] . ' zł' . ' </td><td>' . $row["cena_netto"] * $row["stan"] . ' zł' . '</td><td><a href="/pages/magazyn_edytuj.php?id=' . $row["id"] . '"><i class="fa fa-pencil"> Edytuj</i></a></td> <td>
		</a></td></td> </tr> <tr>
';
        };
        echo '</div>';
        $foo->sqlClose();
        echo ' <!-- Button trigger modal -->
 <a href="magazyn_dodaj.php">
<button type="button" class="btn btn-primary btn-lg">
  Dodaj produkt
</button></a>';
    }

?>

