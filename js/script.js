//TURN VARIABLES
var lastPlayed,
	played,
	ohWins,
	exWins,
	btn = document.getElementById("btn");

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

	//CAPTURE WHO PLAYED "OH" OR "EX"
	played = document.getElementById(gamepiece).getAttribute("class");

		//DETERMINE IF THE SAME PLAYER IS TRYING TO MOVE TWICE
		if(played != lastPlayed) {
			event.target.appendChild(document.getElementById(gamepiece)); //This will go in the if/else
		} else {
			alert("Let someone else have a turn!");
		};

	//PREVENT FURTHER DRAG AND DROP
	document.getElementById(gamepiece).removeAttribute("draggable");

	//TURN THIS MOVE INTO lastPlayed TO GET USED IN THE if/else
	lastPlayed = document.getElementById(gamepiece).getAttribute("class");	
};

//GAME RESET
	//ENTIRE PAGE

btn.onclick = function() {
	// alert("It's Working");
	location.reload();
};

	//ONLY GAMEBOARD

//GAME LOGIC

	//DETERMINE WIN

	//DETERMINE DRAW

//GAME SCORING
	//COLLECTING WINS AND LOSSES

