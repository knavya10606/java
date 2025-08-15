 // 1. VARIABLES
// Variables store data. In JavaScript we can use var, let, or const.
let name = "Navya"; // can change later
const pi = 3.1416;  // constant value, can't change
var age = 18;       // older way of declaring variables
console.log("Name:", name);
console.log("PI value:", pi);
console.log("Age:", age);

// 2. ARRAYS
// Arrays store multiple values in one variable.
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]); // accessing first element
fruits.push("Orange"); // adding an item
console.log("Updated fruits:", fruits);

// 3. FUNCTIONS
// Functions perform tasks or return values.
function greet(person) {
    return "Hello, " + person + "!";
}
console.log(greet(name));

// Arrow function example
const square = (num) => num * num;
console.log("Square of 5:", square(5));

// 4. OBJECTS
// Objects store data in key-value pairs.
let student = {
    firstName: "Navya",
    lastName: "Kumbha",
    age: 18,
    course: "B.Tech CSE"
};
console.log("Student object:", student);
console.log("Student's name:", student.firstName + " " + student.lastName);

// 5. LOOPS
// Loops repeat a block of code multiple times.

// For loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}

// For...of loop (simpler for arrays)
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// While loop
let count = 1;
while (count <= 3) {
    console.log("Count is", count);
    count++;
}