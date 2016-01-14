<script type="text/javascript" src="addbox.js"></script>
<script type="text/javascript" src="jquery-1.4.2.js"></script>
<script type='text/javascript' src="jquery.autocomplete.js"></script>
<link rel="stylesheet" type="text/css" href="jquery.autocomplete.css" />

<script type="text/javascript">
    $().ready(function() {
        $("#1").autocomplete("autocomplete.php",{
            width: 260,
            matchContains: true,
//mustMatch: true,
//minChars: 0,
//multiple: true,
//highlight: false,
//multipleSeparator: ",",
            selectFirst: false
        });
    });
</script>

<script type="text/javascript">
    $().ready(function() {
        $("#3").autocomplete("autocomplete1.php",{
            width: 260,
            matchContains: true,
//mustMatch: true,
//minChars: 0,
//multiple: true,
//highlight: false,
//multipleSeparator: ",",
            selectFirst: false
        });
    });
    </script>
<input type="text" name="sub" size="76" /><br/><br/>
<INPUT type="button" value="Add Row" onclick="addRow('dataTable')" />

<INPUT type="button" value="Delete Row" onclick="deleteRow('dataTable')" />
<table border="1" cellpadding="10" id="data">
    <tr>