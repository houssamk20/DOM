var plus = document.getElementsByClassName("plus-btn");
var val = document.querySelectorAll(".Quant");
var del = document.querySelectorAll(".delete");
var item = document.querySelectorAll(".item");
var heart = document.querySelectorAll(".fa")
var price = document.querySelectorAll(".price")
for(let i =0 ;i< plus.length;i++){
     
    plus[i].addEventListener("click",function(){
        val[i].value++;
        totalPrice()
    });
}
var minus = document.querySelectorAll(".minus-btn")
for(let i =0 ; i < minus.length;i++){
    minus[i].addEventListener("click",function(){
        if(minus[i].nextElementSibling.value>1){
        minus[i].nextElementSibling.value--;
        totalPrice()
    }});
}
for( let x =0 ; x<del.length; x++){
    del[x].addEventListener("click",function(){
        del[x].parentElement.remove();
        totalPrice()
    });
}
for( let i=0 ; i < heart.length; j++){
    heart[i].addEventListener("click", function(){
        if ( heart[i].style.color === "black" ) {
            heart[i].style.color = "red";
        } else{
            heart[i].style.color = "black";
        }
    });
}
function totalPrice() {
    var sum = 0;
    var quant = document.querySelectorAll('.Quant')
    var prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i].innerHTML * quant[i].value
    }
    document.getElementById('finalPrice').value = sum 
} 
