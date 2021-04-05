let cartButtons=document.getElementsByClassName('shop-item-button');
cart=[];

for(let i=0; i<cartButtons.length; i++){
    let buttons=cartButtons[i]
    buttons.addEventListener('click',()=>{
    setItems(event);
  })
}

function Item(Image,Name,Price,Quantity,Color,InCart) {
  this.image=Image;
  this.name=Name;
  this.price=Price;
  this.quantity=Quantity;
  this.color=Color;
  this.Incart=InCart;
}
function setItems(event) {{
  let buttons=event.target;
  let shopItem=buttons.parentElement.parentElement;
  let Image=shopItem.getElementsByClassName('shop-item-img')[0].src;
  let Name=shopItem.getElementsByClassName('name')[0].innerText;
  let Price=shopItem.getElementsByClassName('price')[0].innerText;
  let Color=shopItem.getElementsByClassName('shop-item-color')[0].value;
  let Quantity=shopItem.getElementsByClassName('shop-item-quantity-input')[0].value;
  let InCart=0;
  let item=new Item(Image,Name,Price,Quantity,Color,InCart);
  cart.push(item);
}
  localStorage.setItem('setItems',JSON.stringify(cart));
  loadcart()
}
function loadcart(){
   let cartNumber=localStorage.getItem(setItems);
   if( cartNumber ) {
        document.querySelector('.fa fa-shopping-cart span').textContent = cartNumber;
    }
}

function countNumber() {
  let cartNumber=localStorage.getItem(setItems);
  cartNumber=parseInt(cartNumber);
  let cartItems = localStorage.getItem('cartIncart');
    cartItems = JSON.parse(cartItems);
    if( action ) {
        localStorage.setItem("setItems", cartNumber - 1);
        document.querySelector('.fa fa-shopping-cart cart-icon span').textContent = cartNumber - 1;
        console.log("action running");
    } else if( cartNumber ) {
        localStorage.setItem("setItems", cartNumber + 1);
        document.querySelector('.fa fa-shopping-cart cart-icon span').textContent = cartNumber + 1;
    } else {
        localStorage.setItem("setItems", 1);
        document.querySelector('.fa fa-shopping-cart cart-icon span').textContent = 1;
    }
}
