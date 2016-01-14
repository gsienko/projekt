<?php
/**
 * Created by PhpStorm.
 * User: Grzegorz Sieńko
 * Date: 2016-01-06
 * Time: 19:47
 */
require_once '../class/database.php';
require_once '../function/naglowek.php';


if ($_SERVER["REQUEST_METHOD"] == "GET" && !EMPTY($_GET["id"])) {
    $database = new sqlService;
    $database->sqlConnect();
    $database->sqlQuery("SELECT * FROM produkty where id=" . $_GET["id"] . " LIMIT 1 ");
    $get = $database->sqlResult();
    print"<pre>";
    var_dump($get);
    print "</pre>";

    $database->sqlClose();
}

?>
<form class="form-horizontal" action='magazyn.php' method='POST'>
        <fieldset>
            <input id="wyslij" name="wyslij" type="hidden" placeholder="" class="form-control input-md" required="">
            <!-- Form Name -->
            <legend>Edytuj produkt</legend>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="nazwa">Nazwa</label>
                <div class="col-md-4">
                    <input id="nazwa" name="nazwa" type="text" placeholder="" class="form-control input-md" required="">

                </div>
            </div>

            <!-- Multiple Radios (inline) -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="jednoska">Jednostka</label>
                <div class="col-md-4">
                    <label class="radio-inline" for="jednoska-0">
                        <input type="radio" name="jednoska" id="jednoska-0" value="kg" checked="checked">
                        kg
                    </label>
                    <label class="radio-inline" for="jednoska-1">
                        <input type="radio" name="jednoska" id="jednoska-1" value="szt">
                        szt
                    </label>
                    <label class="radio-inline" for="jednoska-2">
                        <input type="radio" name="jednoska" id="jednoska-2" value="RBG">
                        RBG
                    </label>
                </div>
            </div>

            <!-- Multiple Radios (inline) -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="vat">VAT</label>
                <div class="col-md-4">
                    <label class="radio-inline" for="vat-0">
                        <input type="radio" name="vat" id="vat-0" value="0" checked="checked">
                        0%
                    </label>
                    <label class="radio-inline" for="vat-1">
                        <input type="radio" name="vat" id="vat-1" value="5">
                        5%
                    </label>
                    <label class="radio-inline" for="vat-2">
                        <input type="radio" name="vat" id="vat-2" value="8">
                        8%
                    </label>
                    <label class="radio-inline" for="vat-3">
                        <input type="radio" name="vat" id="vat-3" value="23">
                        23%
                    </label>
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="stan">Stan początkowy</label>
                <div class="col-md-4">
                    <input id="stan" name="stan" type="text" placeholder="" class="form-control input-md" required="">

                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="cena_netto">Cena netto:</label>
                <div class="col-md-4">
                    <input id="cena_netto" name="cena_netto" type="text" placeholder="" class="form-control input-md" required="">

                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="pkwiu">PKWiU</label>
                <div class="col-md-4">
                    <input id="pkwiu" name="pkwiu" type="text" placeholder="" class="form-control input-md" required="">

                </div>
            </div>

            <!-- Button -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="button"></label>
                <div class="col-md-4">
                    <button id="button" name="button" class="btn btn-primary">Zapisz</button>
                </div>
            </div>

        </fieldset>
    </form>

<script type="text/javascript">

    var nazwa = '<?php echo $get[1] ?>';
    var jednostka = '<?php echo $get[2] ?>';
    var vat = '<?php echo $get[3] ?>';
    var stan = '<?php echo $get[4] ?>';
    var cena_netto = '<?php echo $get[5] ?>';

    jQuery('#nazwa').val(nazwa);
    jQuery('#stan').val(stan);
    jQuery('#cena_netto').val(cena_netto);

    if (vat == '0') jQuery('#vati-0').prop("checked", true);
    if (vat == '5') jQuery('#vat-1').prop("checked", true);
    if (vat == '8') jQuery('#vat-2').prop("checked", true);
    if (vat == '23') jQuery('#vat-3').prop("checked", true);
    if (jednostka == 'kg')  jQuery('#jednoska-0').prop("checked", true);
    if (jednostka == 'szt')  jQuery('#jednoska-1').prop("checked", true);
    if (jednostka == 'RBG')   jQuery('#jednoska-2').prop("checked", true);
</script>