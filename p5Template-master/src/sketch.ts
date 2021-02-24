// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N : 20,
    Dispersion :0.1,
    Opacity : 20,
    Ellipse_Size: 300,
    StrokeWeight: 2,
    Download_Image: () => save(),
}
gui.add(params, "N", 5, 20, 1)
gui.add(params, "Dispersion", 0, 0.5, 0.0001)
gui.add(params, "Opacity", 0, 255, 1)
gui.add(params, "Ellipse_Size", 100, 1000, 1)
gui.add(params, "StrokeWeight", 0, 20, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


/* Rectangles */
/*
function draw() {
    randomSeed(0)
    background('black')
    noStroke()
    for (let i = 0; i < params.N; i++)
    {
        fill(random(255), random(255), random(255), params.Opacity)
        rect(random(width), random(height), random(200), random(200))
    }
}*/

/* Ellipses */
/*function draw() {
    randomSeed(0)
    background('black')
    noStroke()
    translate (width/2, height/2)
    for (let i = 0; i < params.N; i++)
    {
        const angle = random(TWO_PI)
        const radius = randomGaussian(0, width * params.Dispersion)
        fill(0, random(255), random(255), params.Opacity)
        ellipse(radius * cos(angle), radius * sin(angle), params.Ellipse_Size)
    }
}*/

/* Rosace */
/*function draw() {
    randomSeed(0)
    background('black')
    stroke('white')
    strokeWeight(params.StrokeWeight)
    fill(0, 255, 255, params.Opacity)
    ellipse(width/2 ,height/2, 400, 400)

    for (let i = 0; i < params.N; i++)
    {
        let angle = TWO_PI / params.N * i;
        fill(0, 255, 255, params.Opacity)
        ellipse(200 * cos(angle) + width/2, 200 * sin(angle) + height/2, params.Ellipse_Size)
    }
}*/

/* Damier */
function draw() {
    background('black')

    for (let i = 0; i < 8; i++)
    {
        for (let j = i % 2; j < 8; j+=2)
        {
            fill('white')
            rect(i * width/8, j * height/8, width/8, height/8)
        }
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}