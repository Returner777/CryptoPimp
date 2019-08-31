// Morningstar.team 

// https://crptopimp.fun/sale-token/

// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q

// Google Chrome CP Game (Fraldo, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Fraldo {
  
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -45;
    }
  }

  hits(kovanci) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = kovanci.x + kovanci.r * 0.5;
    let y2 = kovanci.y + kovanci.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, kovanci.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(uImg, this.x, this.y, this.r, this.r);
    
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);  
  }
}
