let led = localStorage.getItem("cart" );
var cart1 = [];
if(led == null){
    cart1 = []
} else {
    cart1 = JSON.parse(led);
}

var table = document.getElementById("myTable");
for(var i=0; i<cart1.length; i++){
    cart1[i].quantity=1;
    var row = `<tr>
    <td>${cart1[i].title}</td>
  <td><input type="number" name="quantity" id="quant${i}" value="${cart1[i].quantity}" size="5" style="text-align:center"></td>
    <td>${cart1[i].price}</td>
    <td>${cart1[i].quantity*cart1[i].price}</td>
    <td><button id="${i}" onclick="remove(this.id)">Delete</button></td>
  </tr>`;
    table.innerHTML += row;
}

function remove(i){
    var led = localStorage.getItem("cart" );
    var cart1 = JSON.parse(led);
    cart1.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart1));
    window.location.reload();
}


function redo(){
   window.location.replace("mens.html");
}

function undo(){
    window.location.replace("womens.html");
}

function hudo(){
    window.location.replace("payment.html");
}

function calcTotal(){
    var led = localStorage.getItem("cart" );
    var cart1 = JSON.parse(led);
    var total=0;
    for(var i=0; i<cart1.length; i++){
        cart1[i].quantity=document.getElementById(`quant${i}`).value;
        total += cart1[i].quantity*cart1[i].price;
    }
    document.querySelector(".dip").innerHTML=(`Total Price: ${total}`);
    localStorage.setItem("total-temp", total);
}

function applypromo(){
    var promo = document.getElementById('promo').value;
    var total = 0;
    if(promo == 'masai30'){
        for(var i=0; i<cart1.length; i++){
            cart1[i].quantity=document.getElementById(`quant${i}`).value;
            total += cart1[i].quantity*cart1[i].price;
        }
        total = total * 0.7;
        document.querySelector(".dip").innerHTML=(`Total Price: ${total.toFixed(2)}`);
        localStorage.setItem("total-temp", total);
    }else {
        alert(`Wrong Promo Code`)
    }
}
