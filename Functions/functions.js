// Functions
// Functions are asynchronous, in that they run out of sync with how code normally loads.


// function countToFive() {
//     for (var num = 1; num <= 5; num++) {
//         console.log(num);
//     }
// }

// // countToFive();


// function greetSomeone(person) {

//     if (person == "Martin") {
//         console.log("Hello, Martin");
//     }
//     else {
//         console.log("Greetings, Earthling!");
//     }

// }

// var person = "Jerry";

// greetSomeone("Martin"); // person == "Martin"
// console.log(person)
// greetSomeone("Jerry"); // person == "Jerry"
// greetSomeone("Robert");

// function createArray() {
//     var newArray = [0, 1, 2, 3, 4, 5];
//     return newArray; // added the return statement
// }
// var arr = createArray(); // now needAnArray is the variable that is calling on createArray

// console.log(arr);
// console.log(createArray());







// An example on building a pizza using a function:

function createPizzaOrder(bread, sauce, toppings) {
    // pizza is an array of the items we want to use to make the ordered pizza.
    let pizza = [];
    pizza.push(bread, sauce, toppings)
    return pizza;
}

var toppings = ['pepperoni', 'mozzarella', 'eggplant', 'goat cheese']
var bread = 'thin crust';
var sauce = 'marinara';

var toppings1 = ['olives', 'mozzarella', 'sausage', 'arigula']
var bread1 = 'deep dish';
var sauce1 = 'white sauce';


var order1 = createPizzaOrder(bread, sauce, toppings);
var order2 = createPizzaOrder(bread1, sauce1, toppings1);

console.log(order1);
console.log(order2);