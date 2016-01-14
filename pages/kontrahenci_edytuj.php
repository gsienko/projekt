<?php
/**
 * Created by PhpStorm.
 * User: Grzegorz Sieńko
 * Date: 2016-01-06
 * Time: 19:47
 */
require_once '../class/database.php';
require_once '../function/naglowek.php';
$database = new sqlService;
$database->sqlConnect();

if ($_SERVER["REQUEST_METHOD"] == "GET" && !EMPTY($_GET["id"])) {
    $database = new sqlService;
    $database->sqlConnect();
    $database->sqlQuery("SELECT * FROM klienci where id=" . $_GET["id"] . " LIMIT 1 ");
    $get = $database->sqlResult();


    $database->sqlClose();
}


?>

<form class="form-horizontal" action='kontrahenci.php' method='POST' xmlns="http://www.w3.org/1999/html">
    <fieldset>

        <!-- Form Name -->
        <legend>Dodaj kontrahenta</legend>

        <input id="id" name="id" type="hidden" placeholder="" class="form-control input-md" required="">

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="nazwa">Nazwa Firmy</label>
            <div class="col-md-4">
                <input id="nazwa" name="nazwa" type="text" placeholder="" class="form-control input-md" required="">
                <span class="help-block">Nazwa Firmy</span>
            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="adres">Adres</label>
            <div class="col-md-8">
                <input id="adres" name="adres" type="text" placeholder="" class="form-control input-md" required="">
                <span class="help-block">Adres siedziby</span>
            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="kod_pocztowy">Kod pocztowy</label>
            <div class="col-md-2">
                <input id="kod_pocztowy" name="kod_pocztowy" type="text" placeholder="00-000"
                       class="form-control input-md" required="">
                <span class="help-block">Kod pocztowy</span>
            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="miasto">Miasto</label>
            <div class="col-md-4">
                <input id="miasto" name="miasto" type="text" placeholder="" class="form-control input-md" required="">

            </div>
        </div>

        <!-- Text input-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="nip">NIP</label>
            <div class="col-md-4">
                <input id="nip" name="nip" type="text" placeholder="" class="form-control input-md" required="">
                <span class="help-block">Numer Identyfikacji Podatkowej</span>
            </div>
        </div>

        <!-- Multiple Radios (inline) -->
        <div class="form-group">
            <label class="col-md-4 control-label" for="termin_platnosci">Płatność</label>
            <div class="col-md-4">
                <label class="radio-inline" for="termin_platnosci-0">
                    <input type="radio" name="termin_platnosci" id="termin_platnosci-0" value="1" checked="checked">
                    1 dzień
                </label>
                <label class="radio-inline" for="termin_platnosci-1">
                    <input type="radio" name="termin_platnosci" id="termin_platnosci-1" value="3">
                    3 dni
                </label>
                <label class="radio-inline" for="termin_platnosci-2">
                    <input type="radio" name="termin_platnosci" id="termin_platnosci-2" value="5">
                    5 dni
                </label>
                <label class="radio-inline" for="termin_platnosci-3">
                    <input type="radio" name="termin_platnosci" id="termin_platnosci-3" value="7">
                    7 dni
                </label>
            </div>
        </div>

        <!-- Multiple Radios -->
        <div class="form-group">
            <label class="col-md-4 control-label" for="przelew">Przelew</label>
            <div class="col-md-4">
                <div class="radio">
                    <label for="przelew-0">
                        <input type="radio" name="przelew" id="przelew-0" value="1" checked="checked">

                        Tak
                    </label>
                </div>
                <div class="radio">
                    <label for="przelew-1">
                        <input type="radio" name="przelew" id="przelew-1" value="0">
                        Nie
                    </label>
                </div>
            </div>
        </div>

        <!-- Multiple Radios -->
        <div class="form-group">
            <label class="col-md-4 control-label" for="dostawca">Rodzaj klienta</label>
            <div class="col-md-4">
                <div class="radio">
                    <label for="dostawca-0">
                        <input type="radio" name="dostawca" id="dostawca-0" value="1" checked="checked">
                        Dostawca
                    </label>
                </div>
                <div class="radio">
                    <label for="dostawca-1">
                        <input type="radio" name="dostawca" id="dostawca-1" value="0">
                        Odbiorca
                    </label>
                </div>
            </div>
        </div>

        <!-- Button -->
        <div class="form-group">
            <label class="col-md-4 control-label" for="zatwierdz"></label>
            <div class="col-md-4">
                <input type="submit" value="Zapisz" id="button1id" name="button1id" class="btn btn-success">
            </div>
        </div>

    </fieldset>
</form>
<script type="text/javascript">
    var id = '<?php echo $get[0] ?>';
    var nazwa = '<?php echo $get[1] ?>';
    var adres = '<?php echo $get[2] ?>';
    var kod = '<?php echo $get[3] ?>';
    var miasto = '<?php echo $get[4] ?>';
    var nip = '<?php echo $get[5] ?>';
    var platnosc = '<?php echo $get[7] ?>';
    var przelew = '<?php echo $get[6] ?>';
    var klient = '<?php echo $get[8] ?>';
    jQuery('#id').val(id);
    jQuery('#nazwa').val(nazwa);
    jQuery('#adres').val(adres);
    jQuery('#kod_pocztowy').val(kod);
    jQuery('#miasto').val(miasto);
    jQuery('#nip').val(nip);
    if (platnosc == '1') jQuery('#termin_platnosci-0').prop("checked", true);
    if (platnosc == '3') jQuery('#termin_platnosci-1').prop("checked", true);
    if (platnosc == '5') jQuery('#termin_platnosci-2').prop("checked", true);
    if (platnosc == '7') jQuery('#termin_platnosci-3').prop("checked", true);
    if (przelew == '1')  jQuery('#przelew-0').prop("checked", true);
    if (przelew == '0')  jQuery('#przelew-1').prop("checked", true);
    if (klient == '1')   jQuery('#dostawca-0').prop("checked", true);
    if (klient == '0')   jQuery('#dostawca-1').prop("checked", true);
</script>