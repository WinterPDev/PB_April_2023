

// Conditional Statements

/*
 Conditionals are a series of yes/no (true/false) questions that dictate when/what parts of our code execute.

*/

if (question / condition) {

}


if (condition) {
    // what to do if condition is true
}
else if ('2nd condition') { // can have 0 to many of these statements    
    // what to do if 2nd condition is true
}
else {  // can have 0 or 1 of these statements    
    // what to do if none of the previous conditions are met
}


var x = 75;
if (x > 100) {
    console.log("bigger than 100");
}
else if (x > 50) {
    console.log("bigger than 50");
}
else if (x > 25) {
    console.log("bigger than 25");
}
else {
    console.log("small number");
}
// because the first statement is not true, but the second statement is true, it will print "bigger than 50" to our console.  However, it won't even try to check our else if(x > 25) or else statements because it has already found something in the chain that is true.


var y = 23;

// Is x equal to y?
x === y // false

if (x === y) {
    console.log('X is Equal to Y');
}
else {
    console.log('X is NOT equal to Y');
}

// Is x not equal to y?
x !== y

x > y

y > x