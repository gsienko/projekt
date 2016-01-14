<?php
require_once '../class/database.php';
require_once '../function/naglowek.php';
$foo = new sqlService;
$foo->sqlConnect();

//print"<pre>";
//var_dump($_POST);
if ($_SERVER["REQUEST_METHOD"] == "POST" && !EMPTY($_POST) && EMPTY($_POST['id'])) {
    $q = 'INSERT INTO `baza`.`klienci` (`id`,`nazwa`,`adres`,`kod_pocztowy`,`miasto`,`nip`,`przelew`,`termin_platnosci`,`dostawca`)
										VALUES (NULL, "' . $_POST['nazwa'] . '", "' . $_POST['adres'] . '", "' . $_POST['kod_pocztowy'] . '", "' . $_POST['miasto'] . '", "' . $_POST['nip'] . '", ' . $_POST['przelew'] . ', ' . $_POST['termin_platnosci'] . ', ' . $_POST['dostawca'] . ');';

    $foo->sqlQuery($q);
    echo '<script type="text/javascript">
    $(window).load(function(){
        $(\'#myModal1\').modal(\'show\');
    });
</script>';
}
if ($_SERVER["REQUEST_METHOD"] == "POST" && !EMPTY($_POST) && !EMPTY($_POST['id'])) {

    $q = 'UPDATE  `baza`.`klienci` SET
     `nazwa`              = "' . $_POST['nazwa'] . '",
     `adres`              = "' . $_POST['adres'] . '",
     `kod_pocztowy`       = "' . $_POST['kod_pocztowy'] . '",
     `miasto`             = "' . $_POST['miasto'] . '",
     `nip`                = "' . $_POST['nip'] . '",
     `przelew`           = ' . $_POST['przelew'] . ',
     `termin_platnosci`   = ' . $_POST['termin_platnosci'] . ',
     `dostawca`           = ' . $_POST['dostawca'] . '
     WHERE
     `klienci`.`id` =  ' . $_POST['id'] . ';';


    $foo->sqlQuery($q);
    echo '<script type="text/javascript">
    $(window).load(function(){
        $(\'#myModal\').modal(\'show\');
    });
</script>';
}
$foo->sqlQuery("SELECT * FROM klienci");
if ($foo->sqlRows() > 0) {


    echo '<div class="panel panel-default">  <div class="panel-heading">Kontrahenci</div>
<div class="panel-body"> 
<table class="table" id="table"><thead> <tr> <th>Nazwa</th> <th>Adres</th> <th>Kod pocztowy</th> <th>Miasto</th><th>NIP</th><th>Dostawca</th><th>#</th></tr> </thead> <tbody><tr>
';

    while ($row = $foo->sqlResult()) {
        $zmienna = 'TAK';
        if ($row["dostawca"] == '0') {
            $zmienna = 'NIE';
        }
        echo '<td>' . $row["nazwa"] . '</td> <td>' . $row["adres"] . '</td> <td>' . $row["kod_pocztowy"] . '</td> <td>' . $row["miasto"] . '</td><td>' . $row["nip"] . '</td><td>' . $zmienna . '</td><td><a href="/pages/kontrahenci_edytuj.php?id=' . $row["id"] . '"><i class="fa fa-pencil"> Edytuj</i></a></td> <td>
	</td> <td>
		</a></td></td> </tr> <tr>
';
    };
    echo '</div>';
    echo ' <!-- Button trigger modal -->
 <a href="kontrahenci_dodaj.php">
<button type="button" class="btn btn-primary btn-lg">
  Dodaj
</button></a>';
}

$foo->sqlClose();


?>
<script type="text/javascript">
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
</script>

<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Zmiany Zapisano!</h4>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Dodano kontrahenta!</h4>
            </div>
        </div>
    </div>
</div>

