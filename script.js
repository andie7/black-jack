// Create two variables, the first Card and second card

// Set their values to a random number between 2 and 11

//Create a variable sum and set it to the sum of the two cards

let firstCard = 10;

let secondCard = 11;

let sum = firstCard + secondCard;

// Create a variable hasBlackJack and set it to false

let hasBlackJack = false;

// Create a variable isAlive and set it to true

let isAlive = true;

// Declare a variable called message and assign its value to an empty string and reassign the message variable to the string we're logging out

let message = "";

// store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el");
console.log(messageEl);

// Display the message  in the messageEl using message El.text content

// Cash Out
console.log(hasBlackJack);
console.log(isAlive);

//Log it out

// function startGame

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "YOu are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

//Exercise
// Check if the person is old enough to enter the nightclub (21)

let age = 22;

if (age <= 21) {
  console.log(" you can not enter the clube");
} else {
  console.log("Wlcome!");
}

//Exercise
// Check if the person is eligible for a birthday card from the King (100)

let ageKing = 100;

if (ageKing < 100) {
  console.log("Not eligible");
} else if (ageKing === 100) {
  console.log("Here is your birthday card from the King");
} else {
  console.log("Not eligible, you have already gotten one");
}
