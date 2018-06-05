function open_nav() {
	document.getElementById("l-navigation").style.width = "30vw";
	document.getElementById("l-closebtn").style.display = "none";
}

function close_nav() {
	document.getElementById("l-navigation").style.width = "0";
	document.getElementById("l-closebtn").style.display = "flex";
}