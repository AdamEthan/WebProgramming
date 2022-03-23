/* js_diceGame.js */

function rollIt() {

    // rolling each die randomelly 

    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // sum of rolling 2 dice
    var total = die1 + die2;
    var bet = document.forms[0].elements[0].value;

     let objDiv1 = document.getElementById('result');
     let objDiv2=document.getElementById('winnings');
 

     if(total == 7 || total == 11){
        let x = bet * 2;
        objDiv1.textContent="Results: You WON";
        objDiv2.textContent="Winnings: $" + x;
     }

     else if(total == 2 || total == 3 || total==12){
        objDiv1.textContent="You LOST $" + bet;
        objDiv2.textContent="Winnings: $0";
     }

     else{
      objDiv1.textContent="Roll Again";
      objDiv2.textContent="Winnings: $0";
     }


    document.forms[0].elements[1].value= die1;

    // accessing the 3rd form element using the forms[] and elements[] DOM's arrays
    document.forms[0].elements[2].value = die2;
        
    document.forms[0].elements[3].value = total;
     // change the 4th image src loaded in the document using the images[]
     document.images[0].src="dice_" + die1+ ".gif";

     document.images[1].src="dice_" + die2 + ".gif";

 }

