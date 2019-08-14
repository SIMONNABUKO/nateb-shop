
( addItemsToCart = () =>{
let buttons = document.querySelectorAll('[data-add-btn]');
console.log(buttons.length);
for(let i=0; i<buttons.length; i++ ){
    oneButton = buttons[i];
    count = 0;
    oneButton.addEventListener('click', (event)=>{
        console.log("clicked add t cart button");
        clickedButton = event.target;
       shopItemItemDiv = clickedButton.parentElement;
       console.log(shopItemItemDiv);
       itemTitle = shopItemItemDiv.firstElementChild.textContent;
        console.log(itemTitle);
       itemPrice = shopItemItemDiv.firstElementChild.nextElementSibling.textContent;
       console.log(itemPrice);
       priceElement = shopItemItemDiv.firstElementChild.nextElementSibling;
       itemDescription = priceElement.nextElementSibling.textContent;
       console.log(itemDescription);
       title = document.createElement('h4');
       title.textContent = itemTitle;
       price = document.createElement('p');
       price.textContent = itemPrice;
       description = document.createElement('p');
       description.textContent = itemDescription;
       removeButton = document.createElement('button');
       removeButton.classList.add('remove-button');
       removeButton.textContent = "Remove Item";
        console.log(title);
        console.log(price);
        console.log(description);

       description = itemDescription;
       itemContainer =document.createElement('div');
       itemContainer.classList.add('basket-item-container');
       itemContainer.appendChild(title);
       itemContainer.appendChild(price);
       itemContainer.appendChild(removeButton);
      //  itemContainer.appendChild(description);
         basket = document.querySelector('.basket');
       basket.appendChild(itemContainer);
       count+= 1;
       shoppingCart=document.querySelector('#cart-total');
       shoppingCart.textContent = count;
       //display items added to cart
       basket.style.display = "block";
       //increase the cart total
     
     



       console.log(itemContainer);
       console.log(basket);
       updateCartTotal();
       
       
    })
}
//Update cart total function
const updateCartTotal = () =>{
  cartItems = document.querySelectorAll('.basket-item-container');
  cartTotal = document.querySelector('.cart-total');
  console.log(cartItems);
  total = 0;
  for(let i=0; i<cartItems.length; i++){
    oneCartItem = cartItems[i];
    priceTag = oneCartItem.firstElementChild.nextElementSibling.textContent;
    priceTagFormatted = priceTag.substr(1,4);
    console.log(priceTagFormatted);
    total += Number(priceTagFormatted);
    cartTotal.textContent = total;
  }
};

   
})();

