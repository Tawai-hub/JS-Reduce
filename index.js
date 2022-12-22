const shoppingCart = document.querySelector("#shopping");
const price = [259, 388, 333, 222];
const fruits = ["apple", "mango", "banana", "orange"];
fruits.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    shoppingCart.append(li);
});
let total = price.reduce(myFunction);

function myFunction(total, num) {
    return total + num;
}

let totalDisplay = document.querySelector("#total");
let element = document.createElement("p");
element.innerHTML = total;
totalDisplay.append(element);