
//Ik had al meerderekeren gepusht op een andere repositary...
"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";
let width = context.canvas.width; //with= X (largeur)
let height = context.canvas.height;// height= Y (hauteur)
let size= 50;
let noirode = [1, 2, 3, 4, 5, 6, 7, 8];
window.onmousemove = draw;
window.onclick= changeNoirodeSize;

background();// pour faire en sort que le background sois la automatiquement depuis le debut (mettre en dehors du update)
drawNoirode();// pour faire en sort que le background sois la automatiquement depuis le debut

/**
 *
 * @param {MouseEvent} eventData
 */

function draw (eventData){
	let x = eventData.pageX;
	let y = eventData.pageY;

	background();
	drawTotoro(x, y);
	drawNoirode();
	
};

function background() {
	context.fillStyle = "Grey";
	context.fillRect(0, 0, width, height);
	
	
}

function drawNoirode() {
	
	for (let i = 0; i < 8; i++) {
		
		let noirode={// object voor noirode
			x: 100 + i*200,
			y: 140
		};
		
			context.fillStyle = "#000";
			Utils.fillEllipse(noirode.x+70, noirode.y+90, size, size);
			context.fillStyle = "#000";
			context.fillStyle = "#FFF";
			Utils.fillEllipse(noirode.x+50, noirode.y+80, 18, 20);
			Utils.fillEllipse(noirode.x+90, noirode.y+80, 18, 20);
			context.fillStyle = "#000";
			Utils.fillEllipse(noirode.x+50, noirode.y+80, 8, 8);
			Utils.fillEllipse(noirode.x+90, noirode.y+80, 8, 8);
	}
	context.fillStyle = "LightGray";
	context.textAlign = "center";
	context.font = "bold 60pt  arial,Charcoal";
	context.fillText("Safae Najjari", width / 2, height / 2 + 24);
}
function changeNoirodeSize(){
	if (size==50 ) { size=60
	}
	else{ size=50
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
