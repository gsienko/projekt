 <?php 
require_once '../class/database.php';
 $foo = new sqlService;
 $foo -> sqlConnect();
 //print"<pre>";
 //var_dump($_POST);
 if($_SERVER["REQUEST_METHOD"]=="POST" && !EMPTY($_POST) )
 {
     $q = 'UPDATE  `baza`.`klienci` SET
     `nazwa`              = "'.$_POST['nazwa'].'",
     `adres`              = "'.$_POST['adres'].'",
     `kod_pocztowy`       = "'.$_POST['kod_pocztowy'].'",
     `miasto`             = "'.$_POST['miasto'].'",
     `nip`                = "'.$_POST['nip'].'",
     `przelew`            = '.$_POST['przelew'].',
     `termin_platnosci`   = '.$_POST['termin_platnosci'].',
     `dostawca`           = '.$_POST['dostawca'].'
     WHERE
     `klienci`.`id` =  '.$_POST['id'].';';

     $foo->sqlQuery($q);
    // echo $foo->sqlResult();
 }

echo 'Dodano';
?>
