
//Ik had al meerderekeren gepusht op een andere repositary...
"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";
let width = context.canvas.width;
let height = context.canvas.height;
let frameCount = 0;
let mouseX = 0;
let mouseY = 0;
let noirodes = [];
let hSpeed = 15;
let vSpeed = 15;
let isPlaying = true;
update();

function update() {
	frameCount++;
	requestAnimationFrame(update);
}

window.onmousemove = drawTotoro;

document.onmousedown = click;

/**
 * 
 * @param {MouseEvent} e 
 */
function click(e) {
    console.log(e.pageX + " " + e.pageY);
    if (Utils.calculateDistance(e.pageX, e.pageY, x, y) < size) {
        isPlaying = false;
        context.fillStyle = "red";
        Utils.fillCircle(e.pageX, e.pageY, size / 2);
    }
}



function draw(x,y) {
    if (isPlaying) {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(x, y, size);
        x += hSpeed;
        y += vSpeed;
        if (x >= width - size || x <= size) {
            hSpeed *= -1;
        }
        if (y >= height - size || y <= size) {
            vSpeed *= -1;
        }
        requestAnimationFrame(draw);
    }
}

/**
 *
 * @param {MouseEvent} eventData
 */

/**
 *
 * @param {KeyboardEventEvent} eventData
 */


function setup(eventData) {
	background();
}

window.addEventListener("mousemove", function (event) {
	let x = event.pageX;
	let y = event.pageY;

	setup();
	drawTotoro(x, y);
	drawNoirode();
	letNoirodeMove();
	requestAnimationFrame();
	draw(x,y);
});

function background() {
	context.fillStyle = "Grey";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";
	context.textAlign = "center";
	context.font = "bold 48pt Arial";
	context.fillText("Safae Najjari", width / 2, height / 2 + 24);
}

function letNoirodeMove() {
	
	// random directions
	let hd = -1;
	let vd = -1;
	if (Utils.randomNumber(0, 1) == 0) {
		hd = 1;
	}
	if (Utils.randomNumber(0, 1) == 0) {
		vd = 1;
	}
	let noirode = {
		xpos: Utils.randomNumber(0, width),
		ypos: Utils.randomNumber(0, height),
		hdir: hd,
		vdir: vd,
	};
	noirodes.push(noirode);
}
function drawNoirode() {
	for (let i = 0; i < 12; i++) {
		let yrondom = Utils.randomNumber(-80, 10);
		let xrondom = Utils.randomNumber(-10, 20);
		let y = 720 + i * yrondom;
		let x = width / 2 + i * xrondom;
		context.fillStyle = "#000";
		Utils.fillEllipse(70, 90, 50, 50);
		context.fillStyle = "#000";
		context.fillStyle = "#FFF";
		Utils.fillEllipse(50, 80, 18, 20);
		Utils.fillEllipse(90, 80, 18, 20);
		context.fillStyle = "#000";
		Utils.fillEllipse(50, 80, 8, 8);
		Utils.fillEllipse(90, 80, 8, 8);
	}
}

function drawTotoro(x, y) {
	//Body
	context.lineWidth = 20;
	context.fillStyle = "#4e4c51";
	Utils.fillEllipse(x, y + 70, 100, 160);
	//Belly
	context.beginPath();
	context.fillStyle = "#c6bdac";
	Utils.fillEllipse(x, y + 120, 70, 90);
	//Nose 1
	context.fillStyle = "#37232e";
	Utils.fillEllipse(x, y - 40, 23, 8);
	//Eye 1
	context.fillStyle = "#dbd9e4";
	Utils.fillEllipse(x + 45, y - 40, 15, 15);
	context.fillStyle = "#000";
	Utils.fillEllipse(x + 45, y - 40, 5, 5);
	//Eye 2
	context.fillStyle = "#dbd9e4";
	Utils.fillEllipse(x - 45, y - 40, 15, 15);
	context.fillStyle = "#000";
	Utils.fillEllipse(x - 45, y - 40, 5, 5);
	//Ear 1
	context.fillStyle = "#4e4c51";
	Utils.fillEllipse(x + 30, y - 100, 20, 40);
	//Ear 2
	Utils.fillEllipse(x - 30, y - 100, 20, 40);
	//Mouth
	context.lineWidth = 7;
	context.fillStyle = "#fff";
	context.strokeStyle = "#fff";
	Utils.strokeHalfEllipse(x, y - 15, 40, 15);

	//Detail Belly
	context.strokeStyle = "#4e4c51";
	context.fillStyle = "#4e4c51";
	Utils.BellyHalfEllipse(x, y + 50, 15, 10);
	Utils.BellyHalfEllipse(x - 30, y + 70, 15, 10);
	Utils.BellyHalfEllipse(x + 30, y + 70, 15, 10);
	//Hand 1
	context.fillStyle = "#494448";
	Utils.fillEllipse(x + 120, y + 30, 27, 27);
	context.fillStyle = "#000";
	Utils.fillEllipse(x + 120, y + 10, 2, 8);
	Utils.fillEllipse(x + 130, y + 15, 2, 8);
	Utils.fillEllipse(x + 110, y + 15, 2, 8);
	//Hand 2
	context.fillStyle = "#494448";
	Utils.fillEllipse(x - 120, y + 30, 27, 27);
	context.fillStyle = "#000";
	Utils.fillEllipse(x - 120, y + 11, 2, 8);
	Utils.fillEllipse(x - 130, y + 15, 2, 8);
	Utils.fillEllipse(x - 110, y + 12, 2, 8);
	//Feet
	context.fillStyle = "#494448";
	Utils.fillEllipse(x - 75, y + 220, 30, 30);
	//
	context.fillStyle = "#000";
	Utils.fillEllipse(x - 75, y + 205, 2, 10);
	//
	Utils.fillEllipse(x - 60, y + 208, 2, 10);
	//
	Utils.fillEllipse(x - 90, y + 208, 2, 10);
	//
	context.fillStyle = "#494448";
	Utils.fillEllipse(x + 75, y + 220, 30, 30);
	//
	context.fillStyle = "#000";
	Utils.fillEllipse(x + 60, y + 208, 2, 10);
	//
	Utils.fillEllipse(x + 75, y + 208, 2, 10);
	//
	Utils.fillEllipse(x + 90, y + 208, 2, 10);
}
