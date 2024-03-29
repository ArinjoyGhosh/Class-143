noseX = 0;
noseY = 0;
function preload() {
	world_start = loadSound("world_start.wav");
	coin = loadSound("coin.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	dy = loadSound("mariodie.wav");
	over = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotResults);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("Model Loaded");
}
function gotResults(result) {
	if (result.length != 0) {
		console.log(result);
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}



