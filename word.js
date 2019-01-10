var Letter = require("./letter.js");

var Word = function(word) {
  this.letters = [];
  this.word = word;
  
  this.gameboard = function() {
    var gameboard = '';
    for (i=0; i<this.letters.length; i++) {
      gameboard = gameboard + ' ' + this.letters[i].tile();
    }
  }
  
  // this.addStudent = function(name, favoriteSub, gpa) {
  //   this.students.push(new Student(name, favoriteSub, gpa));
  // };
  
  // this method will tell you how many students are in the class
  // this.studentCount = function() {
  //   return this.students.length;
  // };

};

module.exports = Word;