<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<HTML>
<head>
<title>PHP: Hello, World!</title>
	<link href="output.css" type="text/css" rel="stylesheet" />
</head>
<body>    

<h1> Madlibs: </h1>
<br>
<br>

<?php

$noun1 = $_GET['noun1'];
$noun2 = $_GET['noun2'];
$noun3 = $_GET['noun3'];
$adj1 = $_GET['adj1'];
$adj2 = $_GET['adj2'];
$verb1 = $_GET['verb1'];
$verb2 = $_GET['verb2'];
$num1 = $_GET['num1'];

print("The, $adj1 $noun1 $verb1 the $adj2 $noun2.
There she saw a $noun3 $verb2 with $num1 cats.");

?>


</body>
</html>