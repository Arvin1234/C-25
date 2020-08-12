Class Rain {
    constructor (x, y) {
        var options = {
            'density': 1.5,
            'friction': 1.0,
            'restitution': 0.5,
        };
    }
}

function setup() {
    createCanvas(800,400);
    createSprite(400, 200, 50, 50);
  }
  
  function draw() {
    background(255,255,255);  
    drawSprites();
  }
  