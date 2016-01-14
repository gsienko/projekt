<?php 
require_once '../class/database.php';
$foo = new sqlService; 
$foo -> sqlConnect(); 
$foo -> sqlQuery("SELECT * FROM faktury limit 30"); 
if ($foo -> sqlRows() > 0) { 

echo '
<thead> <tr> <th>#</th> <th>Kontrahent</th> <th>Netto</th> <th>Brutto</th> <th>Zapłacono</th> <th> Edycja</th><th> Usuń</th><th> Płatność</th> </tr> </thead> <tbody><tr>';

	while ($row = $foo -> sqlResult()) { 

		echo '<th scope="row">'. $row["numer"] .'</th> <td>'. $row["kontrahent_id"] .'</td> <td>'. $row["netto"] .'</td> <td>'. $row["brutto"] .'</td> <td>'. $row["zaplacono"] .'</td><td><a href="#edytuj"><i class="fa fa-pencil"> Edytuj</i></a></td> <td> 
		<a href="#usun"><i class="fa fa-trash"> Usuń</i></a></td> <td>
		<a href="#zaplac"><i class="fa fa-money"> Płatność</i></td> <td></a>
		</a></td></td> </tr> <tr>
'; 
	}; 

}
$foo -> sqlClose(); 
?>