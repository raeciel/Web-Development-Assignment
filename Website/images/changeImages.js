/* javascript for theGame.html */

if (document.getElementById){    window.onload = setup;}

var images = new Array("image1.jpg","image1.jpg","images-3.jpg");
var index = 0;

function goRight(){
	var img = document.getElementById("picture");    index = index + 1;    if(index == images.length){		index = 0; 
	}    img.src = images[index];
}

function goLeft(){
	var img = document.getElementById("picture");    index = index - 1;    if(index == -1){		index = images.length-1; 
	}
    img.src = images[index];
}

function setup(){
	var leftArrow = document.getElementById("leftArrow");
	var rightArrow = document.getElementById("rightArrow");
	leftArrow.onclick = goLeft;
	rightArrow.onclick = goRight;
}

