function generateStars() {
	const para = document.createElement("span");
	para.className = "tum_stars";
	para.id = "star_" + Math.floor(Math.random() * 4);
	para.style.top = Math.floor(Math.random() * 100) + "%";
	para.style.left = Math.floor(Math.random() * 100) + "%";
	document.getElementsByClassName("third_sec")[0].appendChild(para);
}
var i;
for (i = 0; i < 100; i++) {
	generateStars();
	console.log("hi")
}
// setInterval(() => {}, 1000);
