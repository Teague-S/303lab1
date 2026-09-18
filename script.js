let isScary = false;

function imageSwap() {
	if (!isScary) {
		document.getElementById("cuteCat").style.display = "none";
		document.getElementById("evilCat").style.display = "block";
		isScary = true;
	} else {
		document.getElementById("cuteCat").style.display = "block";
		document.getElementById("evilCat").style.display = "none";
		isScary = false;
	}
}
