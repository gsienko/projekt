<?php
require_once '/class/database.php';
require_once '/function/naglowek.php';
$foo = new sqlService; 
$foo -> sqlConnect(); 
$foo -> sqlQuery("SELECT * FROM users"); 
echo '<br>Pól w tabeli Tabela: '. $foo ->sqlRows() .'<br>';
if ($foo -> sqlRows() > 0) { 
	while ($row = $foo -> sqlResult()) { 
		echo $row["id"] . ' ' . $row["name"] . '<br>'; 
	}; 
}
$foo -> sqlClose(); 
?>
