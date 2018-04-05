var letter = function(letterGuessed){
	this.character = letterGuessed;
	this.appear = false;
	this.showResult = function(){
		return !(this.appear) ? "_" : this.character;
	};
};

module.exports = letter;