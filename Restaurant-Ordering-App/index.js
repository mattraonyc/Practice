import {menuArray} from '/data.js'

const itemsList = document.getElementById("items-list") 
let totalPrice = 0
let removeBtn = document.getElementsByClassName("remove")
let cartItems = []
let pizzaNumber = document.getElementById("pizza-number") 
let hamburgerNumber = document.getElementById("hamburger-number") 
let beerNumber = document.getElementById("beer-number") 
pizzaNumber,
hamburgerNumber,
beerNumber = 1
let numbers = {pizza:1, hamburger:1, beer:1}

document.addEventListener('click', function(e){
    if (e.target.dataset.pizza) {
        if (cartItems.includes('Pizza')){
            addNumber('Pizza')
        } else 
        {
        addToCart('Pizza')
        }
    }
    else if (e.target.dataset.hamburger) {
        if (cartItems.includes('Hamburger')){
            addNumber('Hamburger')
        } else 
        {
        addToCart('Hamburger')
        }
    }
    else if (e.target.dataset.beer) {
        if (cartItems.includes('Beer')){
            addNumber('Beer')
        } else 
        {
        addToCart('Beer')
        }
    } else if (e.target.id === "complete-order") {
        if (totalPrice === 0){

        } else {
        RenderCompleteOrder ()
        }
    } else if (e.target.id === "cancel-btn") {
        document.getElementById("card-form").classList.add("hide")
    } else if (e.target.dataset.remove) {
        removeFromCart(e.target.dataset.remove)
    }
})

// function removeHideClass(item) {
//     if (document.getElementById(`${item}-number`).classList.contains('hide')){
//         document.getElementById(`${item}-number`).classList.remove('hide')
//         addNumber(item)
//     } else {
//         addNumber(item)
//     }
// }

function addNumber(item){
    totalPrice += menuArray.filter(function(menuItem){
        return menuItem.name === item
    })[0].price
        menuArray.filter(function(menuItems){
            return menuItems.name === item
        })[0].number ++
        console.log(document.getElementById(`${item}-number`))
        renderCart(cartItems)
}

function RenderCompleteOrder (){
    document.getElementById("card-form").classList.remove("hide")
}

function addToCart(item){
    let cart = document.getElementById("cart")
    cartItems.push(item)
    document.getElementById("cart-container").classList.remove("hide")
    totalPrice += menuArray.filter(function(menuItems){
        return menuItems.name === item
    })[0].price
    console.log(cartItems)
    renderCart(cartItems)
}

function removeFromCart(item) {
    cartItems = cartItems.filter(cartItems => cartItems !== item)
    totalPrice -= menuArray.filter(function(menuItem){
        return menuItem.name === item
    })[0].price * menuArray.filter(function(menuItem){
        return menuItem.name === item
    })[0].number
    menuArray.filter(function(menuItem){
        return menuItem.name === item
    })[0].number = 1
    console.log(cartItems)
    renderCart(cartItems)
}

function renderCart(cartItems){
    let cartHTML = ''
    for (let cartItem of cartItems) {
        cartHTML += `
        <div class="cart-items">
            <h2 class="cart-item">${cartItem}
                <span class="number" id="${cartItem}-number"></span>
                <span>
                    <h3 class="remove" id="${cartItem}Remove" data-remove="${cartItem}">remove</h3>
                </span>
            </h2>
            <h2 class="cart-price">$${menuArray.filter(function(menuItems){
                return menuItems.name === cartItem
            })[0].price * menuArray.filter(function(menuItem){
                return menuItem.name === cartItem
            })[0].number}</h2>
        <div>
        `
    }
    cart.innerHTML = cartHTML
    for (let cartItem of cartItems) {
    document.getElementById(`${cartItem}-number`).innerHTML = `X${menuArray.filter(function(menuItems){
        return menuItems.name === cartItem
    })[0].number}`
    }
    renderTotalPrice()
}

function renderTotalPrice(){
    const cartTotal = document.getElementById("total-price")

    cartTotal.innerHTML = `$${totalPrice}`
    if (totalPrice === 0) {
        document.getElementById('complete-order').classList.add('grey-out')
    } else {
        document.getElementById('complete-order').classList.remove('grey-out')
    }
}

function getFeedHtml(){ 
    let feedHtml = ''
    menuArray.forEach(function(item){
    feedHtml += `
                    <div class="item-container">
                        <div class="item">
                            <div class="item-image">${item.emoji}</div>
                                <div class="info-container">
                                    <h2 class="item-info">${item.name}</h2>
                                    <h3 class="item-info">${item.ingredients}</h3>
                                    <h2 class="item-info price">$${item.price}</h2>
                                </div>
                                <button class="add-btn" id="${item.name}-btn" data-${item.name}="${item.name}">+</button>
                        </div>
                    </div>
                
                `
})
    return feedHtml
}

function renderMenu(){ 
    itemsList.innerHTML = getFeedHtml()
}

renderMenu()
