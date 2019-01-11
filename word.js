var Letter = require("./letter.js");

var Word = function(word) {
  this.letters = [];
  for (i=0; i<word.length; i++) {
    this.letters[i] = new Letter(word[i]);
    this.letters[i].check(' ');
  }
  
  this.gameboard = function() {
    var gameboard = '';
    for (i=0; i<this.letters.length; i++) {
      gameboard = gameboard + ' ' + this.letters[i].tile();
    }
    return(gameboard + '\n');
  }

  this.isSolved = function() {
    var isSolved = true;
    for (i = 0; i < this.letters.length; i++) {
      if (!this.letters[i].guessed) isSolved = false;
    }
    return(isSolved);
  }

};

module.exports = Word;