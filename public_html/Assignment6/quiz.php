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

<h1> Quiz Results: </h1>
<br>
<br>

<?php

$key = array("24,901", "Nitrogen", "4.5 billion");
$q1=$_GET['q1'];
$q2=$_GET['q2'];
$q3=$_GET['q3'];
$score=floatval(0);

print("Your Answer for Question 1: $q1");
echo "</br>";
print("Correct Answer: " . $key[0]);
echo "</br>";
if($q1==$key[0]){
    $score+=33;
    print("Correct!!!");
}
else{
    print("Wrong :(");
}
echo "</br>";
echo "</br>";

print("Your Answer for Question 2: $q2");
echo "</br>";
print("Correct Answer: " . $key[1]);
echo "</br>";
if($q2==$key[1]){
    $score+=33;
    print("Correct!!!");
}
else{
    print("Wrong :(");
}
echo "</br>";
echo "</br>";

print("Your Answer for Question 3: $q3");
echo "</br>";
print("Correct Answer: " . $key[2]);
echo "</br>";
if($q3==$key[2]){
    $score+=33;
    print("Correct!!!");
}
else{
    print("Wrong :(");
}
echo "</br>";
echo "</br>";


$final=($score / 99) * 100;
$final2=round($final,2);
print("Your score is $final2%");

?>


</body>
</html>