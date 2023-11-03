class Blob {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angryLevel = 0;
    this.maxNoise = 2 + this.angryLevel * 9;
    this.phase = 0;
    this.phaseRate = 0.001;
    this.offset = 0.01;
    this.zoff = 0;
    this.zoffRate = 0.01;
    this.blobiness = 20;
    this.xCoordinates = [];
    this.yCoordinates = [];
    this.layers = 1;
  }

  addLayer() {

  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(222, 239, 231, 15);
    stroke(255);
    strokeWeight(1);

    this.maxNoise = 2 + this.angryLevel * 6;
    this.phaseRate = 0.007 + this.angryLevel * 0.007;
    this.zoffRate = 0.01 + this.angryLevel * 0.01;
    this.blobiness = 20 + this.angryLevel * 20;
    this.offset = 0.01 + this.angryLevel * 10;

    let xoff;
    let yoff;

    for (let l = 1; l <= this.layers; l++) {
      beginShape();
      for (var a = 0; a < TWO_PI; a += 0.1) {
        xoff = map(cos(a + this.phase), -1, 1, 0, this.maxNoise);
        yoff = map(sin(a + this.phase), -1, 1, 0, this.maxNoise);
        this.offset = map(noise(xoff, yoff, this.zoff), 0, 1, -this.blobiness, this.blobiness);
  
        let x = (this.radius * l + this.offset) * cos(a);
        let y = (this.radius * l + this.offset) * sin(a);
        vertex(x, y);
        this.xCoordinates.push(x);
        this.yCoordinates.push(y);
      }
      endShape(CLOSE);
    }

    this.phase += this.phaseRate;
    this.zoff += this.zoffRate;
    pop();
  }
}