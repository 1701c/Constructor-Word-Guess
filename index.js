var Word = require("./word.js");
var inquirer = require('inquirer');

var wordList = ['Jurrasic Park', 'Avatar', 'Titanic', 'The Avengers', 'Black Panther', 'Frozen', 'Beauty and the Beast'];

function playGame() {
  var self = this;

  this.newGame = function () {
    console.log('\nWelcome to the Word Guess Game!');
    this.guessCount = 10;
    this.currentWord = new Word(wordList[Math.floor(Math.random() * wordList.length)]);
    this.makeGuess();
  };

  this.askForLetter = function () {
    return inquirer
      .prompt([{
        type: "input",
        name: "choice",
        message: "Guess a letter!",
        validate: function (val) {
          return /[a-z1-9]/gi.test(val);
        }
      }])
      .then(function (val) {
        var hitCount = 0;
        var correctGuess = false;

        for (i = 0; i < self.currentWord.letters.length; i++) {
          if (val.choice.toLowerCase() === self.currentWord.letters[i].value.toLowerCase() && !self.currentWord.letters[i].guessed) {
            self.currentWord.letters[i].guessed = true;
            hitCount++;
            correctGuess = true;
          }
        }
        console.log(' > ' + hitCount + ' hit(s)!');

        if (!correctGuess) {
          self.guessCount--;
          console.log(' > ' + self.guessCount + ' guesses remaining!')
        }
      });
  };

  this.makeGuess = function () {
    console.log('\n' + this.currentWord.gameboard());
    this.askForLetter().then(function () {
      if (self.guessCount < 1) {
        console.log(' > You lose!!')
        for (i = 0; i < self.currentWord.letters.length; i++) {
          self.currentWord.letters[i].guessed = true;
        }
        console.log('\n' + self.currentWord.gameboard());
        self.newGamePrompt();
      } else if (self.currentWord.isSolved()) {
        console.log(' > You solved it!!');
        console.log('\n' + self.currentWord.gameboard());
        self.newGamePrompt();
      } else {
        self.makeGuess();
      }
    });
  };

  this.newGamePrompt = function () {
    inquirer
      .prompt([{
        type: "confirm",
        name: "choice",
        message: "Play Again?"
      }])
      .then(function (val) {
        if (val.choice) {
          self.newGame();
        } else {
          console.log('\n > Goodbye!\n');
        }
      });
  };
}
var game = new playGame();
game.newGame();