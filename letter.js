var Letter = function(value) {
  this.value = value;
  this.guessed = false;
  this.tile = function() {
    if (this.guessed) {
      return (value)
    } else {
      return ('_')
    }
  };
  this.check = function(guess) {
    if (guess === this.value) {
      this.guessed = true;
    }
  }
}

module.exports = Letter;