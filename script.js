var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function randomNumber() {
	var rgb2 = "rgb(" + (Math.floor(Math.random() * 256)) + ", "
	+ (Math.floor(Math.random() * 256)) + ", "
	+ (Math.floor(Math.random() * 256)) + ")";

	var rgb1 = "rgb(" + (Math.floor(Math.random() * 256)) + ", "
	+ (Math.floor(Math.random() * 256)) + ", "
	+ (Math.floor(Math.random() * 256)) + ")";

	body.style.background = "linear-gradient(to right," + rgb1 + ", "
	+ rgb2 + ")";

	css.textContent = body.style.background + ";";
}

window.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomNumber);