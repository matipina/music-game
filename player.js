class Player {
  constructor(playerSize) {
    this.playerSize = playerSize;
    this.attributes = {
      'humor': 0,
      'empathy': 0,
      'optimism': 0,
      'ambition': 0,
      'creativity': 0
    }
    this.hp = 100;
    this.x;
    this.y;
  }

  display(ring, keyIndex) {
    push();
    noStroke();
    fill(255);
    this.x = ring.xCoordinates[keyIndex];
    this.y = ring.yCoordinates[keyIndex];
    ellipse(
      this.x,
      this.y,
      this.playerSize
    );
    fill(255, 220, 200, 6);
    for (let i = 0; i < 70; i++) {
      ellipse(ring.xCoordinates[keyIndex], ring.yCoordinates[keyIndex], i * 3);
    }
    pop();
  }
}
