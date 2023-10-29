rightwristX = ""
rightwristY = ""
rightwristscore = ""



function preload() {
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvass")
	video = createCapture(VIDEO)
	video.size(1240,336)
	video.hide();
	poseNet = ml5.poseNet(video,modalloaded)
	poseNet.on("pose", gotposes)
}

function draw() {
	game()
	image(video,0,0,1240,336)
	if(rightwristscore > 0.2){
		fill("red")
		stroke("black")
		circle(rightwristX , rightwristY ,20)
	}
}

function modalloaded(){
	console.log("modalloaded")
}

function gotposes(results){
	if(results.length > 0){
		rightwristX = results[0].pose.rightWrist.x;
		rightwristY = results[0].pose.rightWrist.y;
		rightwristscore = results[0].pose.keypoints[1].score;
	}
}






