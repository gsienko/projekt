<?php 
/* 
* Obsługa bazy danych MySQL 
* by bidziu
*/ 

class sqlService 
{ 
      var $query; 
      var $result; 
      var $records_rows; 
      var $records; 
      var $dbHost; 
      var $dbUser; 
      var $dbHaslo; 
      var $dbName; 
      var $connection; 

      /* 
       * konstruktor 
       */ 
      function sqlService() 
      { 
          global $cfg_host_db, $cfg_login_db, $cfg_haslo_db, $cfg_baza_db; 
          $this -> query = ''; 
          $this -> result = ''; 
          $this -> records_rows = ''; 
          $this -> records = array(); 
          $this -> dbHost = 'localhost'; // nazwa hosta 
          $this -> dbUser = 'root'; // login do bazy 
          $this -> dbHaslo = ''; // hasło do bazy 
          $this -> dbName = 'baza'; // nazwa bazy danych 
          $this -> connection = FALSE; 
      } 


      /* 
       * obsługa błędów 
       */ 
      function sqlError() 
      { 
         // echo '<br><b>Błąd MySQL #'.mysql_errno().'</b>: '.mysql_error() .'<br>';
      } 
      /* 
       * koniec obsługi błędów: sqlError(); 
       */ 


      /* 
       * łączenie z bazą danych 
       */ 
      function sqlConnect() 
      { 
          $this -> connection = (@mysql_connect($this -> dbHost, $this -> dbUser,
           $this -> dbHaslo) == TRUE); 

          if (($this -> connection == TRUE) && ($this -> dbName != '')) 
          { 
             if ($this -> dbName = @mysql_select_db($this -> dbName) == TRUE) 
             { 
                return TRUE; 
             } 
             else 
             { 
                 $this -> sqlError(); 
                 mysql_close(); 
                 return FALSE; 
             } 
          } 
          else 
          { 
              $this -> sqlError(); 
              return FALSE; 
          } 
      } 
      /* 
       * koniec łączenia z bazą: sqlConnect() 
       */ 


      /* 
       * zamknięcie połączenia i kasowanie zmiennych 
       */ 
      function sqlClose() 
      { 
          if (isset($this -> connection)) 
          { 
             if ($this -> result) 
             { 
                mysql_free_result($this -> result); 
             }; 
             mysql_close(); 
             unset( 
                   $this -> query, 
                   $this -> result, 
                   $this -> records_rows, 
                   $this -> records, 
                   $this -> dbHost, 
                   $this -> dbUser, 
                   $this -> dbHaslo, 
                   $this -> dbName, 
                   $this -> connection 
             ); 
             return TRUE; 
          } 
          else 
          { 
             $this -> sqlError(); 
             return FALSE; 
          }; 
      } 
      /* 
       * koniec zamknięcia połączenia i kasowania zmiennych: sqlClose() 
       */ 


      /* 
       * obsługa zapytań do bazy 
       */
    /**
     * @param $date
     */
    function sqlFaktura($date)
	   {

		$q = 'INSERT INTO `baza`.`faktury` (`id`, `data_wystawienia`, `kontrahent_id`, `numer_partii`, `hdi`, `rejestracja`, `pozyskano`, `netto`, `brutto`, `zaplacono`, `data_sprzedazy`)
										VALUES (NULL, "'.$date['data_wystawienia'].'", '.$date['kontrahent_id'].', "'.$date['numer_partii'].'", '.$date['hdi'].', "'.$date['rejestracja'].'", "'.$date['pozyskano'].'", '.$date['netto'].', '.$date['brutto'].', '.$date['zaplacono'].', "'.$date['data_sprzedazy'].'");';
		$this-> sqlQuery($q);

	   }
    function sqlZakupy($date)
    {

        $q = 'INSERT INTO `baza`.`zakupy` (`id`, `data_wystawienia`, `kontrahent_id`, `numer_partii`, `hdi`, `rejestracja`, `pozyskano`, `netto`, `brutto`, `zaplacono`, `data_sprzedazy`)
										VALUES (NULL, "'.$date['data_wystawienia'].'", '.$date['kontrahent_id'].', "'.$date['numer_partii'].'", '.$date['hdi'].', "'.$date['rejestracja'].'", "'.$date['pozyskano'].'", '.$date['netto'].', '.$date['brutto'].', '.$date['zaplacono'].', "'.$date['data_sprzedazy'].'");';
        $this-> sqlQuery($q);

    }

      function sqlQuery($query) 
      { 
           $this -> query = $query; 
           if (($this -> result = @mysql_query($this -> query)) == TRUE) 
           { 
              return $this -> result; 
           } 
           else 
           { 
              $this -> sqlError(); 
              return FALSE; 
           } 
      } 
      /* 
       * koniec obsługi zapytań: sqlQuery() 
       */ 


      /* 
       * obsługa zapytań - zwracanie wyniku: sqlResult() 
       */ 

       function sqlResult() 
       { 
           if (($this -> connection == TRUE) && ($this -> result != NULL)) 
           { 
              $this -> records = mysql_fetch_array($this -> result);
              return $this -> records; 
           } 
           else 
           { 
              $this -> sqlError(); 
              return FALSE; 
           } 
       } 
      /* 
       * koniec obsługi zapytań - zwracanie wyniku: sqlResult() 
       */ 


      /* 
       * obsługa zapytań - zwracanie liczby pól: sqlRows() 
       */ 
       function sqlRows() 
       { 
           if ($this -> records_rows = mysql_num_rows($this -> result)) 
           {
               return $this -> records_rows;
           } 
           else 
           { 
              $this -> sqlError(); 
              return FALSE; 
           } 
       } 
      /* 
       * koniec obsługi zapytań - zwracanie liczby pól: sqlRows() 
       */ 



}; 
/* 
* koniec klasy obsługi bazy danych: sqlService 
*/ 
?>