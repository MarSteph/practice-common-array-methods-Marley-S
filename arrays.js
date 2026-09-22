// Task 1
let drinks = ["London Fog", "Miel", "Mocha"];
let pastry = ["Scone", "Croissant", "Muffin"];

// Task 2
console.log(`Number of drinks: ${drinks.length}`);
console.log(`Number of pastries: ${pastry.length}\n`);

// Task 3
console.log(`Order #1: ${drinks[0]}, ${pastry[2]}`);
console.log(`Order #2: ${drinks[1]}, ${pastry[0]}`);
console.log(`Order #3: ${drinks[2]}, ${pastry[1]}\n`);

// Task 4
let drinks_index = 0;
let pastry_index = 1;

console.log(`Order: ${drinks[drinks_index]}, ${pastry[pastry_index]}\n`);

// Task 5
for (let i = 0; i < drinks.length; i++) {
    console.log(`Drink #${i+1}: ${drinks[i]}`);
}

// Task 6
let length = drinks.length;
let new_drink = "Flat White";
console.log(`\nNumber of drinks: ${length}\n`);
drinks[length] = new_drink;
length = drinks.length;
console.log(`Added ${new_drink} drink. The new length is ${length}.\n`);

for (drink of drinks) {
    console.log(drink);
}

console.log(`\nNumber of drinks: ${length}`);