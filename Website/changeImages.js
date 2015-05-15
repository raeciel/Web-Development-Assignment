/* javascript for index.html */

if (document.getElementById){    window.onload = setup;}

var images = new Array("./images/togs.jpg","./images/images-2.jpg","./images/images.jpg","./images/images-4.jpg");
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

