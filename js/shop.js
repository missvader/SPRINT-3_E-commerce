// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;
//product counter function
function count(){
    let countProducts = 0;
    for(let i=0; i<cart.length; i++){
        countProducts += cart[i].quantity;
    }
    document.getElementById("count_product").innerHTML = countProducts;
}

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    products.forEach(product =>{
        if(product.id === id){
            cartList.push(product);
        }
    })
    calculateTotal();
    generateCart();
}*/
// Exercise 2
function cleanCart() {
    //cartList.length = 0;
    //in order to refactor...
    cart.length = 0;
    countProducts = 0;
    //get DOM elements of shopping cart
    document.getElementById("total_price").innerHTML = 0;
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("count_product").innerHTML = 0;
}

// Exercise 3
//create empty array to add prices value
let subTotal = [];
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //iterate cartList array and push price to subTotal array
    for(i=0; i < cartList.length; i++){
        subTotal.push(cartList[i].price);
    }
    //iterate subTotal array to sum prices
    for(i=0; i < subTotal.length; i++){
        total += subTotal[i];
    }
}

// Exercise 4
/*function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for(let i=0; i < cartList.length; i++){
        //in case item is not repeated...
        if(!cart.includes(cartList[i])){
            cartList[i].quantity = 1;
            cartList[i].subTotal = cartList[i].price;
            cart.push(cartList[i]);
        }else{
            //in case item is already in cart, iterate cart to modify quantity
            for(let j=0; j<cart.length; j++){
                cart[j].quantity ++;
                cart[j].subTotal += cart[j].price;
            } 
        }
    }
    applyPromotionsCart();
}*/

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i=0; i < cart.length; i++){
        if(cart[i].id === 1 && cart[i].quantity >= 3){
            let priceDiscount1 = 10;
            cart[i].subtotalWithDiscount = priceDiscount1 * cart[i].quantity;
        }else if(cart[i].id === 3 && cart[i].quantity >= 10){
            let priceDiscount3 = (cart[i].price / 3) * 2;
            cart[i].subtotalWithDiscount = priceDiscount3 * cart[i].quantity;
        }else{
            cart[i].subtotalWithDiscount = cart[i].subTotal;
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //set total=0 and get the DOM element to show cart(empty)
    let total = 0;
    document.getElementById("cart_list").innerHTML = "";
    //iterate cart array and manipulate DOM to print every item of cart array
    for(let i=0; i<cart.length; i++){
        let name = cart[i].name;
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        let totalWithDiscount = cart[i].subtotalWithDiscount;
        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${totalWithDiscount}</td>
        <td><button class='btn btn-sm rounded btn-danger' onclick='removeFromCart(${cart[i].id})'> - </td>
        </tr>`
        total += totalWithDiscount;
        document.getElementById("total_price").innerHTML = total;
        }
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.forEach(item =>{
        if(item.id === id){
            if(!cart.includes(item)){
                item.quantity = 1;
                item.subTotal = item.price;
                item.subtotalWithDiscount = item.subTotal;
                cart.push(item);
            }else{
                for(let i= 0; i<cart.length;i++){
                    if(item.id === cart[i].id){
                        cart[i].quantity++;
                        cart[i].subTotal += cart[i].price;
                    }
                }
            }
        }
        count();
        applyPromotionsCart();
    })
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array cart to get the item to remove from cart
    // 2. Remove found product to the cart array (using splice() method it removes item at index you want)
    for(let product of cart){
        if(product.id === id){
            product.quantity--;
            product.subTotal = product.quantity * product.price;
        }else{
            cart.splice(cart.indexOf(product),1);
        }
        applyPromotionsCart();
        count();
        printCart();
    }
}

function open_modal(){
	printCart();
}