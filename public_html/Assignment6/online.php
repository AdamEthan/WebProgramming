<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<HTML>
<head>
<title>Receipt</title>
	<link href="output.css" type="text/css" rel="stylesheet" />
</head>
<body>    

<h1> Receipt: </h1>
<br>
<br>

<?php

$name=$_GET['n1'];
$email=$_GET['email'];
$cars=$_GET['cars'];
$quant=$_GET['quant'];
$p1=50000;
$p2=500000;

print("Thank you for shopping with us, $name.");
echo "</br>";
print("Your Email: $email.");
echo "</br>";
print("Car Selected: $cars");
echo "</br>";
print("Quantity Purchased: $quant");
echo "</br>";

switch($cars)
{
    case "ford":
    $ans=$quant*$p1;
    print("Total: $$ans");
    break; 

    case "ferrari":
    $ans=$quant*$p2;
    print("Total: $$ans");
    break;
}

?>


</body>
</html>