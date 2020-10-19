//Javascript Code for AntonNaumov_Members

var fullSize = new Array(8);

for (var i=0; i<fullSize.length; i++)
	fullSize[i] = new Image(279,373);
	
fullSize[0].src = "Pictures/Work1.jpg";
fullSize[0].alt = "Work1";
fullSize[1].src = "Pictures/Work2.jpg";
fullSize[1].alt = "Work2";
fullSize[2].src = "Pictures/Work3.jpg";
fullSize[2].alt = "Work3";
fullSize[3].src = "Pictures/Work4.jpg";
fullSize[3].alt = "Work4";
fullSize[4].src = "Pictures/Work5.jpg";
fullSize[4].alt = "Work5";
fullSize[5].src = "Pictures/Work6.jpg";
fullSize[5].alt = "Work6";
fullSize[6].src = "Pictures/Work7.jpg";
fullSize[6].alt = "Work7";
fullSize[7].src = "Pictures/Work8.jpg";
fullSize[7].alt = "Work8";

function displayFull(n){
	document.getElementById("largePic").src = fullSize[n].src;
}

window.addEventListener("load", start, false);

function start(){
	document.getElementById("work1_small").onmouseover = function() {displayFull(0);};
	document.getElementById("work2_small").onmouseover = function() {displayFull(1);};
	document.getElementById("work3_small").onmouseover = function() {displayFull(2);};
	document.getElementById("work4_small").onmouseover = function() {displayFull(3);};
	document.getElementById("work5_small").onmouseover = function() {displayFull(4);};
	document.getElementById("work6_small").onmouseover = function() {displayFull(5);};
	document.getElementById("work7_small").onmouseover = function() {displayFull(6);};
	document.getElementById("work8_small").onmouseover = function() {displayFull(7);};

}

var fullSize1 = new Array(4);

for (var i=0; i<fullSize1.length; i++)
	fullSize1[i] = new Image(279,373);
	
fullSize1[0].src = "Pictures/Fun1.jpg";
fullSize1[0].alt = "Fun1";
fullSize1[1].src = "Pictures/Fun2.jpg";
fullSize1[1].alt = "Fun2";
fullSize1[2].src = "Pictures/Fun3.jpg";
fullSize1[2].alt = "Fun3";
fullSize1[3].src = "Pictures/Fun4.jpg";
fullSize1[3].alt = "Fun4";

function displayFull1(n){
	document.getElementById("largePic1").src = fullSize1[n].src;
}

window.addEventListener("load", start1, false);
function start1(){
	document.getElementById("fun1_small").onmouseover = function() {displayFull1(0);};
	document.getElementById("fun2_small").onmouseover = function() {displayFull1(1);};
	document.getElementById("fun3_small").onmouseover = function() {displayFull1(2);};
	document.getElementById("fun4_small").onmouseover = function() {displayFull1(3);};
}







