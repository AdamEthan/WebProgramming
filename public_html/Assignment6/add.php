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

<h1> Calculator: </h1>
<br>
<br>

<?php

$x=floatval($_POST['x']);
$y=floatval($_POST['y']);
$op=$_POST['op'];

switch($op)
{
    case "+":
    $ans=$x+$y;
    print("$x + $y = $ans");
    break; 
    case "-":
    $ans=$x-$y;
    print("$x - $y = $ans");
    break;
    case "*":
    print("$x * $y = " .$x * $y);
    break; 
    case "/":
    print("$x / $y = " .$x / $y);
    break;
}

?>


</body>
</html>