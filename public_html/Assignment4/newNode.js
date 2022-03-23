let obj = document.querySelector("#bt");
obj.addEventListener("click", myFunction);

function myFunction() {
	
    var node = document.createElement("li");
    var textnode = document.createTextNode("Products");
    node.appendChild(textnode);
    document.querySelector("#myList").appendChild(node);
    
    let node2 = document.createElement("li");
	let textnode2 = document.createTextNode("Fortune");
	node2.appendChild(textnode2);
    document.querySelector("#myList").appendChild(node2);

let listItems = document.querySelectorAll('li');                  
let i; 

let rand=Math.floor(Math.random() * 2);

for (i = 0; i < listItems.length; i++) {    
  if(rand==0){        
  listItems[i].className = 'newBg1';
  }
  if(rand==1){
    listItems[i].className = 'newBg2'; 
  }
  if(i>1 && i%2==0){
    listItems[i].innerHTML="Link "+[i+1]+": <a href='../Assignment4/products.html'>Products</a>";
  } 
  if(i>1 && i%2!=0){
    listItems[i].innerHTML="Link "+[i+1]+": <a href='../Assignment2/fortuneC.html'>Fortune</a>";
  }                         
}

}