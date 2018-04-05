var Letter = function(character){
	this.character = character.toLowerCase();
	this.letterCorrect = false;
	this.showCharacter = function(){
		if(this.letterCorrect) {
			console.log(this.character);
		}
	};
};

// testing, change the letterCorrect variable to true during this process
// var letter1 = new Letter("b");
// letter1.showCharacter();

module.exports = Letter;