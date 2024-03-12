// Create two variables, the first Card and second card

// Set their values to a random number between 2 and 11

//Create a variable sum and set it to the sum of the two cards

let firstCard = getRandomCard();

let secondCard = getRandomCard();

let cards = [firstCard, secondCard]; // array order a list of items

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

// store the sum-el paragraph in a variable called sumEl

let sumEl = document.querySelector("#sum-el");
console.log(sumEl);

// Store var cards

cardsEl = document.querySelector("#cards-el");

// Cash Out
console.log(hasBlackJack);
console.log(isAlive);

//Log it out

//Call a new function called startGame that calls renderGame()

function startGame() {
  renderGame();
}
// function startGame

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // render out first card and second card
  cardsEl.textContent = "Cards:";

  //render out all the cards we have - create a loop that renders out all the cards instead of just two

  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += cards[i] + " ";
  }

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

function newCard() {
  console.log("Drawing a new card from the deck");

  // Create a new card variable and hard code to a number
  let card = getRandomCard();
  // Add the new card to the sum variable
  sum += card;

  // push the card to the cards array
  cards.push(card);
  //Call startGame()
  renderGame();
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

//loops
//let = i > where should we start counting  > start counting from 1
//i<6 > where is the finish line > finish line is 10
//i+=1 > what is the step size we should use? > size to count is from 1 to 1

// messages.length ensures our loop counts up to the final index
for (let i = 0; i < 11; i += 1) {
  console.log(i);
}

for (let i = 0; i < 101; i += 10) {
  console.log(i);
}

let messages = ["Hey", "Bye", "How are you", "See Ya", "Enjoy", "👌"];

console.log(messages[0]);
console.log(messages[1]);
console.log(messages[2]);
console.log(messages[3]);
console.log(messages[4]);

for (let i = 0; i < messages.length; i += 1) {
  console.log(messages[i]);
}

// Create a loop that logs out all the cards in the array
// i represents the index

let carts = [3, 7, 9];

for (let i = 0; i < carts.length; i += 1) {
  console.log(carts[i]);
}

// greetingEL.textcontext += sentence[i]
