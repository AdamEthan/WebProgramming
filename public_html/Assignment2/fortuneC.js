window.onload= fortune;
function fortune()
{
    var fortuneArray = new Array('"There is no secret ingredient. It is just you."',
    '"You are too concerned about what was and what will be. Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present"',
     '"There are no accidents."',
     '"If you only do what you can do, you will never be more than you are now."',
     '"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear."',
     '"One often meets his destiny on the road he takes to avoid it."'
     );
    var ImgArray = new Array("secretIng.jpg","gift.jpg", "point.png","Nevermore.jpg","OogwayWater.jpg","Oogway1.jpg");
    var randnum = Math.floor(Math.random() * fortuneArray.length);

    let text1 = document.getElementById('Fortune');
    text1.textContent=fortuneArray[randnum]

    text1.style.font="monospace"
    text1.style.textDecoration="none"

    let art=document.getElementById("img1")
    art.src=ImgArray[randnum]

    art.style.border="2vh solid black"
}