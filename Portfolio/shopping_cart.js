let cartButtons=document.getElementsByClassName('shop-item-button');

for(let i=0; i<cartButtons.length; i++){
    let buttons=cartButtons[i]
    buttons.addEventListener('click',()=>{
    setItems(event);
    countCart(cart);
    itemCost();
    totalCost();

    })
};
let remove = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < remove.length; i++) {
        var removebutton = remove[i]
        removebutton.addEventListener('click',clearCart)
        }

let purchaseButton=document.getElementsByClassName('btn-purchase')
for (let i = 0; i < purchaseButton.length; i++) {
    purchaseButton[i].addEventListener('click',purchased)
    }

let cart=[];

let Item = function (image,name,price,quantity,color) {
  this.image=image;
  this.name=name;
  this.price=price;
  this.quantity=quantity;
  this.color=color;
};

function setItems(event) {
  let buttons=event.target;
  let shopItem=buttons.parentElement.parentElement;
  let image=shopItem.getElementsByClassName('shop-item-img')[0].src;
  let name=shopItem.getElementsByClassName('name')[0].innerText;
  let priCe=shopItem.getElementsByClassName('price')[0];
  let price=parseFloat(priCe.innerText.replace('$',''))
  let coLor=shopItem.getElementsByClassName('shop-item-color')[0];
  let color=coLor.value;
  let quantiTy=shopItem.getElementsByClassName('shop-item-quantity-input')[0];
  let quantity=parseFloat(quantiTy.value);
  for (let i in cart){
      if (cart[i].name === name && cart[i].color === color){
                alert("This product already added to the cart!");
                save();
          return;
          }
  }
  let item = new Item(image,name,price,quantity,color);
  cart.push(item);
  save();
  console.log(name);
  displayCart();
};

function removeItemfromCart(){
  for (let i in cart){
      cart.splice(i,);
         break;
            }
  countCart();
  totalCost();
  save();
  };

function purchased(){
  cart=[];
    alert('Thanks you for your purchase');
  countCart();
  itemCost();
  totalCost();
  save();
  return;
}

function clearCart() {
    cart=[];
    countCart();
    itemCost();
    totalCost();
    save();
    };

function itemCost(){
   let cost=0;
    for (let i in cart){
      cost = cart[i].quantity*cart[i].price;
               localStorage.setItem('itemCost',cost);
    }
    localStorage.setItem('itemCost',cost);
  totalCost()
  };

function totalCost(){
  let totalcost=0;
    for (let i in cart){
    totalcost = totalcost+cart[i].quantity*cart[i].price;
    localStorage.setItem('totalCost',totalcost)
    }
  console.log('the total cost is:',totalcost);
localStorage.setItem('totalCost',totalcost)

};

function save() {
  localStorage.setItem('ShoppingCart',JSON.stringify(cart));
}

function loadCart() {
  cart=JSON.parse(localStorage.getItem('ShoppingCart'));
  };
  if (sessionStorage.getItem("ShoppingCart") != null) {
    loadCart();
  };


function countCart(cart){
  let totalCount=0;
  for (let i in cart){
   totalCount += cart[i].quantity;
        }
  let itemNumbers=localStorage.setItem('countCart',totalCount);
       itemNumbers=parseInt(localStorage.getItem('countCart'));

document.querySelector('.cart-icon span').textContent = totalCount;

 };

function displayCart(){
  let cartItems=localStorage.getItem('ShoppingCart');
  cartItems=JSON.parse(cartItems);

  let total_cost=localStorage.getItem('totalCost');
      total_cost=parseInt(total_cost);

  let productContainer=document.querySelector('.cart-items');
    if(productContainer){
     productContainer.innerHTML='';
     Object.values(cartItems,total_cost).map(item =>{
       productContainer.innerHTML +=`
       <div class="product row">
       <ion-icon class="delete" name="close-circle-outline"></ion-icon>
        <div class="name">${item.name}</div>
        <img class="cart-img"src="${item.image}">
        <div class="color">${item.color}</div>
        <div class="price">$${item.price},00</div>
        <div class="quantity">
            <input class="cart-quantity-input" type="number" value="${item.quantity}">
        </div>
        <div class="total-row">$${item.price*item.quantity},00</div>
        </div>
        `
     });

       productContainer.innerHTML +=`
         <div class="cart-total">
         <strong class="cart-total-title">Total</strong>
         <span class="cart-total-price">$${total_cost},00</span>
         </div>
          `
    }
    let iconButton=document.getElementsByClassName('delete')
    for (let i = 0; i < iconButton.length; i++) {
      iconButton[i].addEventListener('click',removeItemfromCart)
     }

 };

 onLoadCartNumbers();
displayCart();
