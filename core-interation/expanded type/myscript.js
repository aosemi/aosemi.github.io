var output = document.getElementById("output")

// when a click happens
window.addEventListener("click", onWindowClick)

function onWindowClick(evt) {
	// figure out where to put the board
	console.log(evt.x, evt.y)

	// set the top and left CSS of the board
	var myBike = document.getElementById("DIA")

}
var inputBox = document.querySelector('input');

inputBox.addEventListener('input',function(evt){

	output.innerHTML = this.value.slice(-1);

	if (this.value == "PPAP") {
 	var img = document.createElement("img");

 	img.src = "ppap.gif";
 	var src = document.getElementById("gif");

 	src.appendChild(img);
	}

	else if(this.value == "A") {
		document.body.style.backgroundColor = "#ff0000" ;
 		document.getElementById("output").style.color = "#0024ff";
	}

	else if(this.value == "B") {
		document.body.style.backgroundColor = "#ff0066" ;
 		document.getElementById("output").style.color = "#18ff00";
	}

	else if (this.value == "C") {
		document.body.style.backgroundColor = "#ff00f0" ;
 		document.getElementById("output").style.color = "#fffc00";
	}
	
	else if (this.value == "D") {
		document.body.style.backgroundColor = "#ae00ff" ;
 		document.getElementById("output").style.color = "#ff9c00";
	}


	else if (this.value == "E") {
		document.body.style.backgroundColor = "#6600ff" ;
 		document.getElementById("output").style.color = "#ff0000";
	}


	else if (this.value == "F") {
		document.body.style.backgroundColor = "#00baff" ;
 		document.getElementById("output").style.color = "#ff7800";
	}


	else if (this.value == "G") {
		document.body.style.backgroundColor = "#00ff90" ;
 		document.getElementById("output").style.color = "#ff00ea";
	}


	else if (this.value == "H") {
		document.body.style.backgroundColor = "#00fcff" ;
 		document.getElementById("output").style.color = "#f0ff00";
	}


	else if (this.value == "I") {
		document.body.style.backgroundColor = "#009022" ;
 		document.getElementById("output").style.color = "#ff77fd";
	}


	else if (this.value == "J") {
		document.body.style.backgroundColor = "#0000ca" ;
 		document.getElementById("output").style.color = "#fdff6c";
	}


	else if (this.value == "K") {
		document.body.style.backgroundColor = "#bd9546" ;
 		document.getElementById("output").style.color = "#31abb9";
	}


	else if (this.value == "L") {
		document.body.style.backgroundColor = "#ff9393" ;
 		document.getElementById("output").style.color = "#4aaf36";
	}


	else if (this.value == "M") {
		document.body.style.backgroundColor = "#00beb3" ;
 		document.getElementById("output").style.color = "#be0000";
	}


	else if (this.value == "N") {
		document.body.style.backgroundColor = "#fff953" ;
 		document.getElementById("output").style.color = "#8d198e";
	}

	else if (this.value == "O") {
		document.body.style.backgroundColor = "#75ff5a" ;
 		document.getElementById("output").style.color = "#8380ff";
	}

	else if (this.value == "P") {
		document.body.style.backgroundColor = "#ff53f5" ;
 		document.getElementById("output").style.color = "#53ff63";
	}

	else if (this.value == "Q") {
		document.body.style.backgroundColor = "#ff009c" ;
 		document.getElementById("output").style.color = "#fffd38";
	}

	else if (this.value == "R") {
		document.body.style.backgroundColor = "#e58100" ;
 		document.getElementById("output").style.color = "#7900cd";
	}

	else if (this.value == "S") {
		document.body.style.backgroundColor = "#d00000" ;
 		document.getElementById("output").style.color = "#3100d0";
	}

	else if (this.value == "T") {
		document.body.style.backgroundColor = "#ff9292" ;
 		document.getElementById("output").style.color = "#00d09d";
	}

	else if (this.value == "U") {
		document.body.style.backgroundColor = "#61ab00" ;
 		document.getElementById("output").style.color = "#ff92d7";
	}

	else if (this.value == "V") {
		document.body.style.backgroundColor = "#00e4ff" ;
 		document.getElementById("output").style.color = "#48ff00";
	}

	else if (this.value == "W") {
		document.body.style.backgroundColor = "#ff0096" ;
 		document.getElementById("output").style.color = "#0060ff";
	}
	
	else if (this.value == "X") {
		document.body.style.backgroundColor = "#ffb400" ;
 		document.getElementById("output").style.color = "#9962ff";
	}

	else if (this.value == "Y") {
		document.body.style.backgroundColor = "#fff662" ;
 		document.getElementById("output").style.color = "#ff6262";
	}

		else if (this.value == "Z") {
		document.body.style.backgroundColor = "#62ffc9" ;
 		document.getElementById("output").style.color = "#ff6bde";
	}
	else{
		document.body.style.backgroundColor = "#fdffab" ;
	}

	inputBox.value = "";
});