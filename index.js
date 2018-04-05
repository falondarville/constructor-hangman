// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var wordBank = ["asparagus", "carrots", "spinach", "lettuce"];
var randomWord = Math.floor(Math.random() * wordBank.length);
var randomArray = wordBank[randomWord];
