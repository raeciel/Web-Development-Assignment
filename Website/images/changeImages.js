/* javascript for theGame.html */

if (document.getElementById){

var images = new Array("image1.jpg","image1.jpg","images-3.jpg");
var index = 0;

function goRight(){
	var img = document.getElementById("picture");
	}
}

function goLeft(){
	var img = document.getElementById("picture");
	}

}

function setup(){
	var leftArrow = document.getElementById("leftArrow");
	var rightArrow = document.getElementById("rightArrow");
	leftArrow.onclick = goLeft;
	rightArrow.onclick = goRight;
}
