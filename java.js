const header=document.querySelector("header");
WebTransportBidirectionalStream();

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

let menu=document.querySelector("#menu-icon");
let navmenu=document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
var clickcount=0;
function addtocart(){
    var btn=document.getElementById("add-to-cart-btn");
  
    btn.innerHTML="Added to cart";
    btn.classList.add("added");
 
}
function addtocart2(){
    var btn=document.getElementById("add-to-cart-btn2");
   
        btn.innerHTML="Added to cart";
        btn.classList.add("added");
       
}
function addtocart3(){
    var btn=document.getElementById("add-to-cart-btn3");
        btn.innerHTML="Added to cart";
        btn.classList.add("added");
        
}
function addtocart4(){
    var btn=document.getElementById("add-to-cart-btn4");
        btn.innerHTML="Added to cart";
        btn.classList.add("added");
        }
       

function addtocart5(){
    var btn=document.getElementById("add-to-cart-btn5");
    
        btn.innerHTML="Added to cart";
        btn.classList.add("added");
      
}




















