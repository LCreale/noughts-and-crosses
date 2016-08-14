//DRAG AND DROP
document.ondragstart = function(event) {
	event.dataTransfer.setData("Text", event.target.id);
};

document.ondragover = function(event) {
	event.preventDefault();
};

document.ondrop = function(event) {
	event.preventDefault();
	var gamepiece = event.dataTransfer.getData("Text");
	event.target.appendChild(document.getElementById(gamepiece));
	//PREVENT FURTHER DRAG AND DROP
	document.getElementById(gamepiece).removeAttribute("draggable");

};

//GAME RESET
	//ENTIRE PAGE
var btn = document.getElementById("btn");

btn.onclick = function() {
	// alert("It's Working");
	location.reload();
};

	//ONLY GAMEBOARD

//GAME LOGIC
	//NO DOUBLE TURNS - one O, one X, etc.

	//DETERMINE WIN

	//DETERMINE DRAW

//GAME SCORING
	//COLLECTING WINS AND LOSSES