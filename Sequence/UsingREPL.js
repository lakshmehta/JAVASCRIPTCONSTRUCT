//Random Function Math.floor(Math.random() * 10); to get Single Digit.
let random1 = Math.floor(Math.random() * 10);
console.log("Random Single digit number is:" + random1);

//Use Random to get Dice Number between 1 to 6
let random2 = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Dice number between 1 to 6: " + random2);

//Add two Random Dice Number and Print the Result
let dice1 = Math.floor(Math.random() * 10) % 6 + 1;
let dice2 = Math.floor(Math.random() * 10) % 6 + 1;
let result = dice1 + dice2;
console.log("Addition of two random dice numbers "+ dice1 +"+"+ dice2+ "=" + result);
