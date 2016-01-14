<?php
require_once '../class/database.php';
require_once '../function/naglowek.php';
$data = new datetime();
if($_SERVER["REQUEST_METHOD"]=="GET" && !EMPTY($_GET["id"]) )
{
    $database = new sqlService;
    $database -> sqlConnect();
    $database -> sqlQuery("SELECT * FROM zakupy where id=".$_GET["id"]." LIMIT 1 ");
    $get = $database -> sqlResult();

}


?>


<form class="form-horizontal" action='dokumenty.php' method='POST'>
    <div class="panel panel-default">
        <div class="panel-heading">Dokument Zakupu VAT nr <?php
            $database = new sqlService;
            $database -> sqlConnect();
            $database->sqlQuery("SELECT * FROM zakupy WHERE ID IN (SELECT MAX(ID) FROM zakupy)");
            $fv_num = $database->sqlResult();
            $database->sqlClose();
            echo ++$fv_num[0]."/2016"; ?></div>

        <br>

         <!-- Pole klient -->
        <div class="form-group">
            <label class="col-md-4 control-label" for="idklient"></label>
            <div class="col-md-5">
                <div class="input-group">
                    <span class="input-group-addon">Klient</span>
                    <select class="productName form-control" name="kontrahent_id"></select> </div>

            </div>
        </div>

        <!-- Pole Data wystawienia-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="data_wystawienia"></label>
            <div class="col-md-4">
                <div class="input-group">
                    <span class="input-group-addon">Data wystawienia</span>
                    <input id="data_wystawienia" value="<?php echo (!EMPTY($get["data_wystawienia"]))?$get["data_wystawienia"]:$data->format('Y-m-d');?>" name="data_wystawienia" class="form-control" placeholder="[Data dzisiejsza]" type="text" required="">
                </div>

            </div>
        </div>
        <input type="hidden" class="productName form-control" name="id_faktury" id="id_faktury">

        <!-- Pole Data wystawienia-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="data_sprzedazy"></label>
            <div class="col-md-4">
                <div class="input-group">
                    <span class="input-group-addon">Data sprzedaży   </span>
                    <input id="data_sprzedazy" name="data_sprzedazy" value="<?php echo $data->format('Y-m-d');?>" class="form-control" placeholder="[Data dzisiejsza]" type="text" required="">
                </div>

            </div>
        </div>

        <!-- Pole pozyskano-->
        <div class="form-group">
            <label class="col-md-4 control-label" for="pozyskano"></label>
            <div class="col-md-4">
                <div class="input-group">
                    <span class="input-group-addon">Miejscowość</span>
                    <input id="pozyskano" name="pozyskano" value="Katowice" class="form-control" placeholder="Katowice" type="text" required="">
                </div>

            </div>
        </div>



        <div class="panel panel-default">
            <!-- Panel Towary -->
            <div class="panel-heading">Towary</div>
        </div>





        <!-- Tabela-->
        <div class="table-responsive">
            <table id="fvtabela" class="table table-hover">
                <tr>
                    <td><i class="fa fa-plus plusbtn"></i></td>
                    <td>Nazwa towaru lub usługi</td>
                    <td>Ilość</td>
                    <td>Cena jednostkowa netto</td>
                    <td>VAT</td>
                    <td>Netto</td>
                    <td>Brutto</td>
                    <td></td>
                    <td></td>
                    <td>-</td>
                </tr>
                <!--  <tr>-->
                <!--    <td><i class="plusbtn"><i class="fa fa-plus"></i></i></td>-->
                <!--    <td>      <select id="product_1" name="product_1" class="form-control" placeholder="" data-width="250" >-->
                <!--	--><?php //echo (!EMPTY($get["product_1"]))?'<option value="'.$get["product_1"].'">'.$get["product_1"].'</option>':"";?><!--</select>-->
                <!--    </td>-->
                <!--    <td>      <input id="ilosc_1" name="ilosc_1" class="form-control" placeholder="" type="text" required="">-->
                <!--    </td>-->
                <!--    <td>      <input id="netto_1" name="netto_1" class="form-control" placeholder="" type="text" required="">-->
                <!--    </td>-->
                <!--      <td>-->
                <!--          <select id="vat_1" name="vat_1" class="selectpicker" data-style="btn-primary" >-->
                <!---->
                <!--              <option>5%</option>-->
                <!--              <option>23%</option>-->
                <!--          </select>-->
                <!---->
                <!--      </td>-->
                <!--      <td>-->
                <!--          <span id="brutto_1" name="brutto_1" class="input-xlarge uneditable-input">0,00</span>-->
                <!--      </td>-->
                <!--	<td><i class="minusbtn"><i class="fa fa-trash"></i></i></td>-->
                <!--  </tr>-->
            </table>
        </div>


        <!-- Koniec tabeli-->

        <ul class="list-group">
            <li>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon" id="nazwa_netto">Razem Netto</span>
                    <span class="input-group-addon" id="netto">0,00</span>
                    <span class="input-group-addon" id="nazwa_brutto">Razem Brutto</span>
                    <span class="input-group-addon" id="brutto">0,00</span>
                </div>
            </li>
            <li>





                <!-- Dodatkowe informacje-->

                <div class="form-group">
                    <label class="col-md-4 control-label" for="rejestracja"></label>
                    <div class="col-md-4">
                        <div class="input-group">
                            <span class="input-group-addon">Numer rejestracyjny</span>
                            <input id="rejestracja" name="rejestracja" value="SK152ET" class="form-control" placeholder="SK152ET" type="text" required="">
                        </div>
                    </div>
                </div>
            </li><li >
                <!-- Pole numer weterynaryjny-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="hdi"></label>
                    <div class="col-md-4">
                        <div class="input-group">
                            <span class="input-group-addon">Numer(y) weterynaryjny(e)</span>
                            <input id="hdi" name="hdi" value="24699412" class="form-control" placeholder="" type="text" required="">
                        </div>

                    </div>
                </div>
            </li><li >
                <!-- Pole checkbox -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="zaplacono"></label>
                    <div class="col-md-4">
                        <div class="input-group">
      <span class="input-group-addon">
          <input type="checkbox">
      </span>
                            <input id="zaplacono" name="zaplacono" class="form-control" type="text" placeholder="0,00 zł">
                        </div>

                    </div>
                </div>
            </li><li >
                <!-- Prepended text-->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="numer_partii"></label>
                    <div class="col-md-4">
                        <div class="input-group">
                            <span class="input-group-addon">Numer(y) partii</span>
                            <input id="numer_partii" name="numer_partii" class="form-control" placeholder="" type="text" required="">
                        </div>

                    </div>
                </div>
            </li><li>

                <input id="brutto_suma" name="brutto" class="form-control" placeholder="" type="hidden" required="">
                <input id="netto_suma" name="netto" class="form-control" placeholder="" type="hidden"  required="">
                <!-- Textarea -->
                <div class="form-group">
                    <label class="col-md-4 control-label" for="uwagi"></label>
                    <div class="col-md-4">
                        <textarea class="form-control" id="uwagi" name="uwagi">Uwagi</textarea>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <!-- Button  -->
    <div class="form-group">

        <div class="col-md-8">
            <input type="submit" value="Zapisz" id="button1id" name="button1id" class="btn btn-success">
            <button id="button2id" name="button2id" class="btn btn-danger">Anuluj</button>
        </div>
</form>




<script type="text/javascript">


    // AJAX odświeżanie modalnych okien.
    $("#save").on('click',function(){
        var data={
            kontrahent: $('#kontrahent').val(),

        };
        $.ajax({
            type:"post",
            dataType: "html",
            url:'save.php',
            data: data,
            success: function (data,textStatus){
                //alert(data);
                $('table').html(data);
            },


        });

    });
    $("#close").on('click',function(){
        $.ajax({
            type:"post",
            dataType: "html",
            url:'result_f.php',

            success: function (data,textStatus){
                //alert(data);
                $('table').html(data);
            },


        });

    });


    window.productSelectArray = [];
    var firstProductSelect = $('#product_1');

    prepareProductAutocomplete(firstProductSelect);
    productSelectArray.push(firstProductSelect);


    window.nettoSelectArray = [];
    var firstNettoSelect = $('#netto_1');
    nettoSelectArray.push(firstNettoSelect);

    window.iloscSelectArray = [];
    var firstIloscSelect = $('#ilosc_1');
    iloscSelectArray.push(firstIloscSelect);

    window.vatSelectArray = [];
    var firstVatSelect = $('#vat_1');
    vatSelectArray.push(firstVatSelect);

    window.bruttoSelectArray = [];
    var firstBruttoSelect = $('#brutto_1');
    bruttoSelectArray.push(firstBruttoSelect);
    jQuery('#id_faktury').val(<?php echo $fv_num[0]; ?>);


    // Dodawanie / usuwanie elementów w tabeli
    $('.plusbtn').click(function() {
        //<select id="towar" name="towar" class="form-control" placeholder="" required="">  [fooo] </select>

        var productIndex = window.productSelectArray.length + 1;
        var newProductSelectId = "product_" + productIndex;
        var iloscIndex = window.iloscSelectArray.length +1;
        var newIloscSelectId = "ilosc_" + iloscIndex;
        var nettoIndex = window.nettoSelectArray.length +1;
        var newNettoSelectId ="netto_" + nettoIndex;
        var vatIndex = window.vatSelectArray.length +1;
        var newVatSelectId = "vat_" + vatIndex;
        var bruttoIndex = window.bruttoSelectArray.length +1;
        var newBruttoSelectId = "brutto_" + bruttoIndex;
//        var nettoIndex = window.nettoSelectArray.length +1;
//        var newNettoSelectId = "netto_" + bruttoIndex;
        var inputs = ['#ilosc_' + iloscIndex, '#vat_' + vatIndex, '#netto_'+nettoIndex];

        $("#fvtabela").append('<tr><td><i class="plusbtn"></i></td><td>' +
            '<select id="'+ newProductSelectId + '" name="product[]" class="form-control" placeholder="" data-width="250">' +
            '<option value=""></option>' +
            '</select>' +
            '</td><td><input id="'+ newIloscSelectId +'" name="'+ newIloscSelectId +'" class="form-control iloscinput" placeholder="" type="text" required=""></td>' +
            '<td><input id="'+ newNettoSelectId +'" name="'+ newNettoSelectId +'" class="form-control nettoinput" placeholder="" type="text" required=""></td>' +
            '<td> <select id="'+ newVatSelectId +'" name="'+newVatSelectId+'" class=" vatinput" data-style="btn-primary"> <option>5%</option> <option>23%</option> </select></td>' +
            '<td> <span id="'+newNettoSelectId+'" name="'+newNettoSelectId+'" class="input-xlarge uneditable-input nettoinput">0,00</span> </td>' +
            '<td> <span id="'+newBruttoSelectId+'" name="'+newBruttoSelectId+'" class="input-xlarge uneditable-input bruttoinput">0,00</span> </td>' +
            '<td> <input type="hidden" id="_'+newNettoSelectId+'" name="_'+newNettoSelectId+'" class="input-xlarge uneditable-input nettoinput1"></td>' +
            '<td> <input type="hidden" id="_'+newBruttoSelectId+'" name="_'+newBruttoSelectId+'" class="input-xlarge uneditable-input bruttoinput1"> </td>' +
            '<td><i class="minusbtn"><i class="fa fa-trash"></i></i></td></tr>}');

        $(inputs.join(',')).on('change', function() {
            var nettoInput = jQuery(this).parents('tr').find(".nettoinput");
            var iloscInput = jQuery(this).parents('tr').find(".iloscinput");
            var vatInput = jQuery(this).parents('tr').find(".vatinput");
            var bruttoInput = jQuery(this).parents('tr').find(".bruttoinput");
            var nettoInput = jQuery(this).parents('tr').find(".nettoinput");
            var bruttoInput1 = jQuery(this).parents('tr').find(".bruttoinput1");
            var nettoInput1 = jQuery(this).parents('tr').find(".nettoinput1");
            var $netto = parseFloat(nettoInput.val());
            var $ilosc = parseFloat(iloscInput.val());
            var $vat   = (parseFloat(vatInput.val())+100)/100;

            bruttoInput.text(Round($netto*$ilosc*$vat,2));
            nettoInput.text(Round($netto*$ilosc,2));
            bruttoInput1.val(Round($netto*$ilosc*$vat,2));
            nettoInput1.val(Round($netto*$ilosc,2));

            var sum = 0;
            var sum_1 = 0;
            jQuery('.bruttoinput').each(function()
            {
                sum+=parseFloat(jQuery(this).text());
            });
            jQuery('.nettoinput').each(function()
            {
                sum_1+=parseFloat(jQuery(this).text());
            });
            jQuery('#brutto').text(sum);
            jQuery('#netto').text(sum_1);
            jQuery('#brutto_suma').val(sum);
            jQuery('#netto_suma').val(sum_1);
            jQuery('#zaplacono').val('0');
        })



        var newProductSelect = $( "#" + newProductSelectId);
        window.productSelectArray.push(newProductSelect);
        prepareProductAutocomplete(newProductSelect);

        var newNettoSelect = $( "#" + newNettoSelectId);
        window.nettoSelectArray.push(newNettoSelect);


        var newIloscSelect = $( "#" + newIloscSelectId);
        window.iloscSelectArray.push(newIloscSelect);
        var newVatSelect = $( "#" + newVatSelectId);
        window.iloscSelectArray.push(newVatSelect);

        var newBruttoSelect = $( "#" + newBruttoSelectId);
        window.bruttoSelectArray.push(newBruttoSelect);
        var newNettoSelect = $( "#" + newNettoSelectId);
        window.nettoSelectArray.push(newNettoSelect);

        $( "#towar" ).insertAfter().select2({ });
        $('.minusbtn').click(function() {
            if($("#fvtabela tr").length != 2)
            {
                $("#fvtabela tr:last-child").remove();
            }
            else
            {
                alert("Nie możesz usunąc ostatniego elementu");
            }
        })});


    // Autocomplete klienci

    $( ".productName" ).select2({
        ajax: {
            url: "dostawca_szukaj.php",
            dataType: 'json',
            delay: 250,

            data: function (params) {
                return {
                    q: params.term // search term
                };
            },
            processResults: function (data) {

                return {
                    results: data
                };
            },
            cache: true
        },
        minimumInputLength: 1
    });


    // Autocomplete produkty
    function prepareProductAutocomplete(targetElement) {
        targetElement.select2({
            ajax: {
                url: "produkty_szukaj.php",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term // search term
                    };
                },

                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            },
            minimumInputLength: 1
        });
    }


    $(function () {
        $('#data_wystawienia').datetimepicker({
            viewMode: 'days',
            format: 'YYYY-m-d'
        });
    });
    $(function () {
        $('#data_sprzedazy').datetimepicker({
            viewMode: 'days',
            format: 'YYYY-m-d'
        });
    });


    var input = document.getElementById('vat_1');
    var sumaNetto = 0;
    var sumaBrutto = 0;
    var licznik = 1;
    function Round(n, k)
    {
        var factor = Math.pow(10, k+1);
        n = Math.round(Math.round(n*factor)/10);
        return n/(factor/10);
    }
    jQuery('.plusbtn').trigger('click');
</script>




</html>