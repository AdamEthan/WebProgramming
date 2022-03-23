//global variable for subtotal and total
var subg=0
var totalg=0

//Total function variables
var q1= document.getElementById("q1");
q1.addEventListener("change", Total);

var q2= document.getElementById("q2");
q2.addEventListener("change", Total);

var q3= document.getElementById("q3");
q3.addEventListener("change", Total);

var yes=document.getElementById("yes");
yes.addEventListener("change", Total);

var no=document.getElementById("no");
no.addEventListener("change", Total);

function Total()
{

//quantity1
var price1 = 20;
var qt1 = parseFloat(q1.value);


subtotal1= qt1 * parseFloat(price1);

document.getElementById("price1").value= subtotal1;

//quantity2
var price2 = 18;
var qt2 = parseFloat(q2.value);

subtotal2= qt2 * parseFloat(price2);

document.getElementById("price2").value= subtotal2;

//quantity3
var price3 = 22;
var qt3 = parseFloat(q3.value);

subtotal3= qt3 * parseFloat(price3);

document.getElementById("price3").value= subtotal3;

subg=subtotal1+subtotal2+subtotal3;
//total 
if(document.getElementById("yes").checked == true){
    var shipping = parseFloat(9.99)
    var ship1=subtotal1+subtotal2+subtotal3+shipping;
    document.getElementById("price4").value= ship1;
    totalg=ship1;
}
if(document.getElementById("no").checked == true){
    var total1=subtotal1+subtotal2+subtotal3;
    document.getElementById("price4").value= total1;
    totalg=total1;
}
}

//Receit variables

let shipForm= document.forms[0];
shipForm.addEventListener("submit", function(Receipt)
{
Receipt.preventDefault();
let len = shipForm.elements.length;
let text =  "<hr><h1> Thank you, here is your Receipt: </h1>";
for (let i=0; i < len -2; i++)
{

if ((shipForm.elements[i].value == "") || (shipForm.elements[i].value == null))
{
	alert("Make sure to input " + shipForm.elements[i].name);
	// bring focus the element that has no value
	shipForm.elements[i].focus();
	// selects the element that has no value
	shipForm.elements[i].select();
	// highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
	shipForm.elements[i].style.backgroundColor="red";
	// return so nothing would be done as user needs to enter the missing value
	return;
}

// if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
else if ((i == 2 ) && (shipForm.elements[i].value.length != 5)  )
{
	alert("Make sure to input 5 digits for " + shipForm.elements[i].name);
	shipForm.elements[i].focus();
	shipForm.elements[i].select();
	shipForm.elements[i].style.backgroundColor="red";
	return;
}

// if there is a value, and this is the 4th element (email) then make sure it's has an '@' the email (validating the email)
else if ((i == 3 ) && (shipForm.elements[i].value.indexOf("@") == -1))
{
	alert("Your email should include the '@' for this " + shipForm.elements[i].name);
	shipForm.elements[i].focus();
	shipForm.elements[i].select();
	shipForm.elements[i].style.backgroundColor="red";
	return;
}

// if there is a value, and this is the 4th element (email) then make sure it's has a '.'' in the email (validating the email)
else if ((i == 3 ) &&  (shipForm.elements[i].value.indexOf(".") == -1))
{
	alert("Your email should include the '.' for this " + shipForm.elements[i].name);
	shipForm.elements[i].focus();
	shipForm.elements[i].select();
	shipForm.elements[i].style.backgroundColor="red";
	return;
}

else if ((i == 4 ) && (shipForm.elements[i].value.length != 16)  )
{
	alert("Make sure to input 16 digits for " + shipForm.elements[i].name);
	shipForm.elements[i].focus();
	shipForm.elements[i].select();
	shipForm.elements[i].style.backgroundColor="red";
	return;
}
}
if(q1.value != 0){
text += q1.name;
text += ": ";
text += q1.value;
text += "<p>"; 
}

if(q2.value != 0){
text += q2.name;
text += ": ";
text += q2.value;
text += "<p>"; 
}

if(q3.value != 0){
text += q3.name;
text += ": ";
text += q3.value;
text += "<p>"; 
}

text+= "Subtotal: $"
text+= subg;
text += "<p>"; 

text+= "Total: $"
text+= totalg;
text += "<p>"; 

//date:
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
text+="Date: <b>" + cDay + "/" + cMonth + "/" + cYear + "</b>";
text += "<p>"; 
//
let creditString = ""
for (let i=0; i < shipForm.elements[4].value.length; i++){
    if(i>11){
        creditString += shipForm.elements[4].value[i];
    }
    else{
        creditString += "x"
    }
}
text+="Credit Card: ";
text+=creditString;
text += "<p>"; 

document.getElementById("Receipt1").innerHTML=text;
console.log(text);
});
