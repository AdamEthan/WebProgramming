// changing styles function
function changestyle()
{
let objDiv1 = document.getElementById('change1');
objDiv1.style.backgroundColor="maroon";
objDiv1.style.color="white";
objDiv1.style.fontSize="2.5vh";
objDiv1.textContent="This is the new sentence with different background color, text color, and font size";

}

//random prize function
function random()
{
    let objDiv1 = document.getElementById('random1');
    var prizes=["Unlimitied Hot Dogs", "an Ipad", "some Socks","a BMW","a Keyboard"];
    var rand1=Math.floor(Math.random()*prizes.length);
    let objDiv2= document.getElementById('prize');
    var result="Congrats u won " + prizes[rand1] +"!!!!"
    objDiv2.textContent=result
}

//swap text function
function swapT()
{
    let objDiv1 = document.getElementById('p1');
    let objDiv2 = document.getElementById('p2');
    var temp=objDiv1.textContent
    objDiv1.textContent=objDiv2.textContent
    objDiv2.textContent=temp
}

function swapImg()
{
let imgobj1 = document.getElementById("img1");
let imgsrc1 = imgobj1.src;
let imgobj2 = document.getElementById("img2");
let imgsrc2 = imgobj2.src;
imgobj1.src= imgsrc2;
imgobj2.src= imgsrc1;
}





