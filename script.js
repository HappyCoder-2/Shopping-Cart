// AKTIVIRAWE KOPCE OD JS VO HTML
/*function activateMe(button) {

  let message = document.querySelector('#clicked'); // додаваме варијабла за JS да ни го вчита id-то од HTML

  let buttonName = button.innerText; // додаваме варијабла buttonName која ќе биде eднаква со името на атрибутот од функцијата којшто ќе го вчита текстот којшто стои помеѓу таговите на button копчето, т.е. Red, Green, Blue
  message.innerText = buttonName; //  ќе се испише текстот  којшто стои помеѓу таговите на button копчето
}*/

// SELEKTIRANJE HTML ELEMENTI PREKU JS PO DLABOCINA

/*function testing() {


  let links = document.querySelectorAll('.my-link');
  console.log(links[0].innerText);
}*/

// getAttribute, removeAttribute, setAttribute
/*function testing() {
  let link = document.querySelector('.first-link');

  link.removeAttribute('title')
  console.log(link.removeAttribute('title'));
}*/

// ADDING HTML ELEMENT IN HTML FILE THROUGHT JS
/*function testing() {
  let links = document.querySelector('.main-div');

links.innerHTML = '<div class="links-div"><a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a></div>' ;
 }*/

// EMAIL VALIDATION

/*function validation() {
  let input = document.querySelector("#email"); // прво ја преземаме вредноста којашто ја имаме напишано
  let value = input.value; //потоа ја преземаме  вредноста којашто се внесува во input-от

  if (value.includes("@" ) && value.includes(".com")) { // ако ги содржи двата клучни елементи
    console.log("valid email"); // конзолата покажува valid email
  } else {
    console.log('invalid email') // ако не ги содржи, конзолата покажува invalid email
  }
}*/

/*PROJECT 2 - SHOPPING CART*/

let allTotal = 0;

function addToCart (button) {
    let parentElement = button.closest('.single-item');
    let price = parentElement.querySelector ('.price').innerText;
    let brand = parentElement.querySelector('.brand').innerText;
    let quantity = parentElement.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');



  if(parseInt(quantity) > 0) {
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);
 
    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
                                              <h3>${brand}</h3>
                                              <p>${price} x ${quantity} = $<span>${total}</span></p>
                                              <button onclick="removeFromCart(this)" class="romove-item">Remove</button>
                                              </div>`;
    
    document.querySelector('.total').innerText = `Total: $${allTotal}`

    button.innerText = 'Added'
    button.setAttribute('disabled', 'true');
  } else {
    alert("Choose quantity");
  }
}

function removeFromCart(button) {

let parentElement = button.closest('.cart-single-item');
let price = parentElement.querySelector('p span').innerText;
let brand = parentElement.querySelector('h3').innerText;
let trainers = document.querySelectorAll('.single-item');
price = parseInt(price);

allTotal  -= price;

document.querySelector('.total').innerText = `Total: $${allTotal}`;

parentElement.remove();

trainers.forEach(function (running) {
  let itemName = running.querySelector('.si-info.brand').innerText;

  if(itemName === brand) {
running.querySelector('.actions input').value = 0;
running.querySelector('.actions button').removeAttribute('disabled');
running.querySelector('.actions button').innerText = `Add to Cart`;
  }
});
}
