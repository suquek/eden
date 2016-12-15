
function showMenu() {

	var menuButton = document.getElementById("menuButton");
	menuButton.style.visibility = "hidden";
	
	var header = document.getElementById("header");
	header.style.height = "215px";

	var navMenu = document.getElementById("navMenu");
	navMenu.style.visibility = "visible";

	var menuBG = document.getElementById("menuBG");
	menuBG.style.visibility = "visible";
	
	var logo = document.getElementById("logo");
	logo.style.visibility = "hidden";
}


function hideMenu() {
	var menuButton = document.getElementById("menuButton");
	menuButton.style.visibility = "visible";
	
	var header = document.getElementById("header");
	header.style.height = "55px";	
	
	var navMenu = document.getElementById("navMenu");
	navMenu.style.visibility = "hidden";
	
	var menuBG = document.getElementById("menuBG");
	menuBG.style.visibility = "hidden";
	
	var logo = document.getElementById("logo");
	logo.style.visibility = "visible";
}


