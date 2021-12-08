function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(500, 500);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 500);

        fill(255,0,0)
        stroke(255,0,0)
        circle(40,40,50);
        
        fill(255,0,0)
        stroke(255,0,0)
        circle(460, 40, 50);
        
        fill(255,0,0)
        stroke(255,0,0)
        circle(44, 460, 50);
        
        fill(255,0,0)
        stroke(255,0,0)
        circle(460, 460, 50);

        fill(255,255,255)
        stroke(0,255,0)
        strokeWeight(10)
        square(40,40,420,0)

        fill(0,255,0)
        stroke(0,255,0)
        strokeWeight(4)
        square(40,460,6,-423)

        fill(0,255,0)
        stroke(0,255,0)
        strokeWeight(4)
        square(460,460,6,-423)

        fill(0,255,0)
        stroke(0,255,0)
        strokeWeight(10);
        line(100,460,6,800)
}