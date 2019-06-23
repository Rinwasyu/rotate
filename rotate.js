let draw = function() {
	let canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	let width = canvas.width = window.innerWidth;
	let height = canvas.height = window.innerHeight;
	let str = document.getElementById("str").value;
	let N = 12;
	let fontSize;
	
	if (height > width) { // スマホっぽい（適当）
		fontSize = (width / 5);
	} else { // PC・タブレットぽい（適当）
		fontSize = (height / 6);
	}
	
	ctx.font = fontSize + "px 'VL PGothic','Sans-serif'";
	ctx.translate(width/2, height/2);
	for (let i = 0; i < N; i++) {
		ctx.fillText(str, 0, 0);
		ctx.rotate(Math.PI * 2 / N);
	}
	setTimeout(draw, 1000);
};

window.onload = function() {
	draw();
};