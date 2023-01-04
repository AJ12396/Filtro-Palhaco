noseX = 0
noseY = 0

function preload() {
    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
    canvas = createCanvas(300, 250)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 250 )
    image(img, noseX, noseY, 35, 25)
}

function takeSelfie() {
    save("filtroPalhaço.png")
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotPoses(results) {
    if (results.length > 0) {
       console.log(results) 
       console.log("Nariz X: "+ results[0].pose.nose.x)
       console.log("Nariz Y: "+ results[0].pose.nose.y)
       noseX = results[0].pose.nose.x-15
       noseY = results[0].pose.nose.y- 45
    }
}