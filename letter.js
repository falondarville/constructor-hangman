var letter = function(lettersGuessed){
	this.character = lettersGuessed;
	this.appear = false;
	this.showResult = function(){
		return !(this.appear) ? "_" : this.character;
	};
};

module.exports = letter;