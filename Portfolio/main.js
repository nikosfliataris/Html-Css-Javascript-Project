// Set buttons //
let button = document.getElementsByClassName('shop-item-button');
// Set Shopping Cart Properties//
var shoppingCart = (function(){
  cart=[];

//Constructor//
function Item(name,price,color,count){
  this.name = name;
  this.price = price;
  this.color = color;
  this.count = count;
}
// Save Cart//
function saveCart(){
  localStorage.setItem('shoppingCart',JSONstrinngify(cart));
}
//Load Cart//
function loadCart() {
  cart=JSON.parse(localStorage.getItem('shoppingCart'));
}
if(localStorage.getItem("shoppingCart") != null){
  loadCart();
}
//Add to Cart//
var obj={};
obj.additemToCart=function (name,price,color,count) {
  for(var item in cart){
    if(cart[item].name===name){
      cart[item].count ++;
      saveCart();
      return;
    }
  }
  var item =new Item(name,price,color,count);
  cart.push(item);
  saveCart();
}
// Set count from item//
obj.setCountForItem=function (name,count) {
  for (var item in cart){
    if (cart[i].name ===name){
      cart[i].count=count;
      break;
    }
  }
};
// Remove item from cart//
obj.removeItemFromCart=function(name){
  for (var item in cart){
    if (cart[item].name===name){
      cart[item].count --;
      if (cart[item].count ===0){
      cart.spice(item,1);
      }
      break;
    }
  }
  saveCart();
}
//
})();
console.log(shoppingCart);
