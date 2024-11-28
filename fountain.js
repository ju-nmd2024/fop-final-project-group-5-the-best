export default class Fountain {
  constructor(x, y, scaleFactor = 0.4) {
    this.x = x;
    this.y = y;
    this.scaleFactor = scaleFactor;
  }
  draw() {
    translate(this.x, this.y);
    scale(this.scaleFactor);
    noStroke();
    push();
    //outline
    //big fountain
    fill("#565d60");
    rect(this.x + 120, this.y + 200, 170, 10);
    rect(this.x + 80, this.y + 190, 40, 10);
    rect(this.x + 60, this.y + 180, 20, 10);
    rect(this.x + 50, this.y + 170, 10, 10);
    rect(this.x + 30, this.y + 160, 20, 10);
    rect(this.x + 20, this.y + 150, 10, 10);
    rect(this.x + 10, this.y + 130, 10, 20);
    rect(this.x, this.y + 90, 10, 40);
    rect(this.x + 10, this.y + 70, 10, 20);

    rect(this.x, this.y + 10, 10, 60);
    rect(this.x + 10, this.y - 10, 10, 20);
    rect(this.x + 20, this.y - 20, 10, 10);
    rect(this.x + 30, this.y - 30, 20, 10);
    rect(this.x + 50, this.y - 40, 10, 10);
    rect(this.x + 60, this.y - 50, 20, 10);
    rect(this.x + 80, this.y - 60, 20, 10);

    //medium fountain
    rect(this.x + 100, this.y - 70, 20, 10);
    rect(this.x + 100, this.y - 80, 30, 10);
    rect(this.x + 90, this.y - 90, 10, 10);
    rect(this.x + 80, this.y - 100, 10, 10);
    rect(this.x + 70, this.y - 150, 10, 50);
    rect(this.x + 80, this.y - 160, 10, 10);
    rect(this.x + 90, this.y - 170, 20, 10);
    rect(this.x + 110, this.y - 180, 20, 10);
    rect(this.x + 130, this.y - 190, 150, 10);
    rect(this.x + 280, this.y - 180, 20, 10);
    rect(this.x + 300, this.y - 170, 20, 10);
    rect(this.x + 320, this.y - 160, 10, 10);
    rect(this.x + 330, this.y - 150, 10, 50);
    rect(this.x + 330, this.y - 150, 10, 50);
    rect(this.x + 320, this.y - 100, 10, 10);
    rect(this.x + 310, this.y - 90, 10, 10);
    rect(this.x + 280, this.y - 80, 30, 10);
    rect(this.x + 290, this.y - 70, 20, 10);

    rect(this.x + 310, this.y - 60, 20, 10);
    rect(this.x + 330, this.y - 50, 20, 10);
    rect(this.x + 350, this.y - 40, 10, 10);
    rect(this.x + 360, this.y - 30, 20, 10);
    rect(this.x + 380, this.y - 20, 10, 10);
    rect(this.x + 390, this.y - 10, 10, 20);
    rect(this.x + 400, this.y + 10, 10, 60);
    rect(this.x + 390, this.y + 70, 10, 20);
    rect(this.x + 400, this.y + 90, 10, 40);
    rect(this.x + 390, this.y + 130, 10, 20);
    rect(this.x + 380, this.y + 150, 10, 10);
    rect(this.x + 360, this.y + 160, 20, 10);
    rect(this.x + 350, this.y + 170, 10, 10);
    rect(this.x + 330, this.y + 180, 20, 10);
    rect(this.x + 290, this.y + 190, 40, 10);

    //contour of biggest bowl
    rect(this.x + 20, this.y + 90, 10, 10);
    rect(this.x + 30, this.y + 100, 20, 10);
    rect(this.x + 50, this.y + 110, 10, 10);
    rect(this.x + 60, this.y + 120, 20, 10);
    rect(this.x + 80, this.y + 130, 40, 10);
    rect(this.x + 120, this.y + 140, 170, 10);
    rect(this.x + 290, this.y + 130, 40, 10);
    rect(this.x + 330, this.y + 120, 20, 10);
    rect(this.x + 350, this.y + 110, 10, 10);
    rect(this.x + 360, this.y + 100, 20, 10);
    rect(this.x + 380, this.y + 90, 10, 10);

    //inner circle of big bowl
    rect(this.x + 90, this.y - 40, 20, 10);
    rect(this.x + 70, this.y - 30, 20, 10);
    rect(this.x + 60, this.y - 20, 10, 10);
    rect(this.x + 40, this.y - 10, 20, 10);
    rect(this.x + 30, this.y, 10, 20);
    rect(this.x + 20, this.y + 20, 10, 40);
    rect(this.x + 30, this.y + 60, 10, 20);
    rect(this.x + 40, this.y + 80, 20, 10);
    rect(this.x + 60, this.y + 90, 10, 10);
    rect(this.x + 70, this.y + 100, 20, 10);
    rect(this.x + 90, this.y + 110, 40, 10);
    rect(this.x + 130, this.y + 120, 150, 10);
    rect(this.x + 280, this.y + 110, 40, 10);
    rect(this.x + 320, this.y + 100, 20, 10);
    rect(this.x + 340, this.y + 90, 10, 10);
    rect(this.x + 350, this.y + 80, 20, 10);
    rect(this.x + 370, this.y + 60, 10, 20);
    rect(this.x + 380, this.y + 20, 10, 40);
    rect(this.x + 370, this.y, 10, 20);
    rect(this.x + 350, this.y - 10, 20, 10);
    rect(this.x + 340, this.y - 20, 10, 10);
    rect(this.x + 320, this.y - 30, 20, 10);
    rect(this.x + 300, this.y - 40, 20, 10);

    //contour smaller bowl

    rect(this.x + 120, this.y - 60, 10, 10);
    rect(this.x + 160, this.y - 40, 90, 10);
    rect(this.x + 280, this.y - 60, 10, 10);
    rect(this.x + 130, this.y - 70, 150, 10);
    rect(this.x + 140, this.y - 90, 130, 10);
    rect(this.x + 110, this.y - 100, 30, 10);
    rect(this.x + 100, this.y - 110, 10, 10);
    rect(this.x + 90, this.y - 140, 10, 30);
    rect(this.x + 100, this.y - 150, 10, 10);
    rect(this.x + 110, this.y - 160, 30, 10);
    rect(this.x + 140, this.y - 170, 130, 10);
    rect(this.x + 270, this.y - 160, 30, 10);
    rect(this.x + 300, this.y - 150, 10, 10);
    rect(this.x + 310, this.y - 140, 10, 30);
    rect(this.x + 300, this.y - 110, 10, 10);
    rect(this.x + 270, this.y - 100, 30, 10);

    //stand
    rect(this.x + 110, this.y - 50, 190, 10);
    rect(this.x + 180, this.y + 70, 50, 10);
    rect(this.x + 170, this.y + 60, 10, 10);
    rect(this.x + 160, this.y + 50, 10, 10);
    rect(this.x + 150, this.y + 30, 10, 20);
    rect(this.x + 160, this.y + 10, 10, 20);
    rect(this.x + 170, this.y, 10, 10);
    rect(this.x + 180, this.y - 20, 10, 40);
    rect(this.x + 170, this.y - 30, 10, 10);
    rect(this.x + 230, this.y - 30, 10, 10);
    rect(this.x + 220, this.y - 20, 10, 40);
    rect(this.x + 230, this.y, 10, 10);
    rect(this.x + 240, this.y + 10, 10, 20);
    rect(this.x + 250, this.y + 30, 10, 20);
    rect(this.x + 240, this.y + 50, 10, 10);
    rect(this.x + 230, this.y + 60, 10, 10);

    rect(this.x + 190, this.y + 20, 30, 10);
    rect(this.x + 170, this.y + 30, 10, 10);
    rect(this.x + 180, this.y + 40, 50, 10);
    rect(this.x + 230, this.y + 30, 10, 10);

    //statue thing on top
    rect(this.x + 180, this.y - 110, 50, 10);
    rect(this.x + 170, this.y - 120, 10, 10);
    rect(this.x + 160, this.y - 160, 10, 40);
    rect(this.x + 170, this.y - 180, 10, 20);
    rect(this.x + 180, this.y - 200, 10, 20);
    rect(this.x + 190, this.y - 220, 10, 20);

    rect(this.x + 210, this.y - 220, 10, 20);
    rect(this.x + 220, this.y - 200, 10, 20);
    rect(this.x + 230, this.y - 180, 10, 20);
    rect(this.x + 240, this.y - 160, 10, 40);
    rect(this.x + 230, this.y - 120, 10, 10);

    //outside of big bowl
    fill("#828b8d");
    rect(this.x + 390, this.y + 90, 10, 10);
    rect(this.x + 380, this.y + 100, 20, 20);
    rect(this.x + 360, this.y + 110, 40, 20);
    rect(this.x + 350, this.y + 120, 40, 30);
    rect(this.x + 330, this.y + 130, 50, 30);
    rect(this.x + 290, this.y + 140, 70, 30);
    rect(this.x + 190, this.y + 150, 160, 30);
    rect(this.x + 190, this.y + 180, 100, 20);
    rect(this.x + 290, this.y + 180, 40, 10);
    rect(this.x + 110, this.y + 140, 10, 10);
    rect(this.x + 70, this.y + 130, 10, 10);
    rect(this.x + 50, this.y + 120, 10, 10);
    rect(this.x + 40, this.y + 110, 10, 10);

    fill("#b4bec0");
    rect(this.x + 290, this.y + 180, 10, 10);
    rect(this.x + 300, this.y + 170, 10, 10);
    rect(this.x + 280, this.y + 160, 20, 10);
    rect(this.x + 270, this.y + 170, 20, 10);
    rect(this.x + 270, this.y + 190, 10, 10);
    rect(this.x + 250, this.y + 180, 20, 10);
    rect(this.x + 260, this.y + 160, 10, 10);
    rect(this.x + 180, this.y + 170, 80, 10);
    rect(this.x + 170, this.y + 160, 80, 10);
    rect(this.x + 190, this.y + 180, 50, 10);
    rect(this.x + 200, this.y + 190, 30, 10);
    rect(this.x + 110, this.y + 150, 80, 10);
    rect(this.x + 70, this.y + 140, 40, 10);
    rect(this.x + 50, this.y + 130, 20, 10);
    rect(this.x + 40, this.y + 120, 10, 10);
    rect(this.x + 30, this.y + 110, 10, 10);
    rect(this.x + 20, this.y + 100, 10, 10);
    rect(this.x + 10, this.y + 90, 10, 10);
    rect(this.x + 200, this.y + 150, 10, 10);

    push();
    fill("#dee4e3");
    rect(this.x + 200, this.y + 160, 10, 10);
    rect(this.x + 120, this.y + 190, 10, 10);
    rect(this.x + 120, this.y + 190, 60, 10);
    rect(this.x + 80, this.y + 180, 110, 10);
    rect(this.x + 70, this.y + 170, 110, 10);
    rect(this.x + 60, this.y + 160, 110, 10);
    rect(this.x + 60, this.y + 150, 50, 10);
    rect(this.x + 50, this.y + 140, 20, 10);
    rect(this.x + 40, this.y + 130, 10, 10);
    rect(this.x + 30, this.y + 120, 10, 10);
    rect(this.x + 20, this.y + 110, 10, 10);
    pop();

    rect(this.x + 180, this.y + 190, 10, 10);
    rect(this.x + 160, this.y + 190, 10, 10);
    rect(this.x + 170, this.y + 180, 10, 10);
    rect(this.x + 150, this.y + 160, 10, 30);
    rect(this.x + 140, this.y + 170, 30, 10);
    rect(this.x + 130, this.y + 190, 20, 10);

    fill("#f5f5f5");
    rect(this.x + 60, this.y + 170, 10, 10);
    rect(this.x + 50, this.y + 150, 10, 20);
    rect(this.x + 40, this.y + 140, 10, 20);
    rect(this.x + 30, this.y + 130, 10, 30);
    rect(this.x + 20, this.y + 120, 10, 30);
    rect(this.x + 10, this.y + 100, 10, 30);
    rect(this.x + 70, this.y + 150, 10, 10);
    rect(this.x + 80, this.y + 170, 10, 10);
    rect(this.x + 90, this.y + 180, 10, 10);
    rect(this.x + 100, this.y + 160, 10, 10);
    rect(this.x + 110, this.y + 170, 10, 10);

    //top of big bowl
    fill("#828b8d"); //darkest color
    rect(this.x + 100, this.y - 60, 20, 10);
    rect(this.x + 90, this.y - 50, 20, 10);
    rect(this.x + 80, this.y - 40, 10, 10);
    rect(this.x + 50, this.y - 20, 10, 10);
    rect(this.x + 290, this.y - 60, 20, 10);
    rect(this.x + 300, this.y - 50, 20, 10);
    rect(this.x + 320, this.y - 40, 10, 10);
    rect(this.x + 350, this.y - 20, 10, 10);
    rect(this.x + 380, this.y + 80, 10, 10);
    rect(this.x + 370, this.y + 90, 10, 10);
    rect(this.x + 350, this.y + 100, 10, 10);
    rect(this.x + 340, this.y + 110, 10, 10);
    rect(this.x + 300, this.y + 120, 30, 10);
    rect(this.x + 250, this.y + 130, 40, 10);

    fill("#b4bec0"); //base color
    rect(this.x + 80, this.y - 50, 10, 10);
    rect(this.x + 70, this.y - 40, 10, 10);
    rect(this.x + 30, this.y - 10, 10, 10);
    rect(this.x + 20, this.y + 10, 10, 10);
    rect(this.x + 10, this.y + 60, 10, 10);
    rect(this.x + 20, this.y + 80, 10, 10);
    rect(this.x + 30, this.y + 90, 10, 10);
    rect(this.x + 50, this.y + 100, 10, 10);
    rect(this.x + 60, this.y + 110, 10, 10);
    rect(this.x + 80, this.y + 120, 10, 10);
    rect(this.x + 120, this.y + 130, 10, 10);
    rect(this.x + 180, this.y + 130, 70, 10);
    rect(this.x + 280, this.y + 120, 40, 10);
    rect(this.x + 320, this.y + 110, 20, 10);
    rect(this.x + 340, this.y + 100, 10, 10);
    rect(this.x + 350, this.y + 90, 20, 10);
    rect(this.x + 350, this.y + 90, 20, 10);
    rect(this.x + 370, this.y + 80, 10, 10);
    rect(this.x + 380, this.y + 70, 10, 10);
    rect(this.x + 390, this.y + 60, 10, 10);
    rect(this.x + 380, this.y + 10, 10, 10);
    rect(this.x + 370, this.y - 10, 10, 10);
    rect(this.x + 360, this.y - 20, 10, 10);
    rect(this.x + 350, this.y - 30, 10, 10);
    rect(this.x + 330, this.y - 40, 10, 10);
    rect(this.x + 320, this.y - 50, 10, 10);

    fill("#dee4e3"); //lightest color

    rect(this.x + 10, this.y + 10, 10, 50);
    rect(this.x + 20, this.y + 60, 10, 20);
    rect(this.x + 40, this.y + 90, 20, 10);
    rect(this.x + 60, this.y + 100, 10, 10);
    rect(this.x + 90, this.y + 120, 40, 10);
    rect(this.x + 130, this.y + 130, 50, 10);

    rect(this.x + 380, this.y + 60, 10, 10);
    rect(this.x + 390, this.y + 10, 10, 50);
    rect(this.x + 380, this.y - 10, 10, 20);
    rect(this.x + 370, this.y - 20, 10, 10);

    fill("#f5f5f5"); //highlight
    rect(this.x + 60, this.y - 40, 10, 20);
    rect(this.x + 50, this.y - 30, 10, 10);
    rect(this.x + 30, this.y - 20, 20, 10);
    rect(this.x + 20, this.y - 10, 10, 20);
    rect(this.x + 10, this.y + 10, 10, 30);
    rect(this.x + 20, this.y + 60, 10, 10);
    rect(this.x + 30, this.y + 80, 10, 10);
    rect(this.x + 50, this.y + 90, 10, 10);
    rect(this.x + 70, this.y + 110, 20, 10);
    rect(this.x + 140, this.y + 130, 10, 10);

    //inside of big bowl
    fill("#828b8d"); //darker color
    rect(this.x + 110, this.y - 40, 50, 10);
    rect(this.x + 90, this.y - 30, 50, 10);
    rect(this.x + 70, this.y - 20, 40, 10);
    rect(this.x + 60, this.y - 10, 20, 10);
    rect(this.x + 40, this.y, 20, 10);
    rect(this.x + 250, this.y - 40, 50, 10);
    rect(this.x + 270, this.y - 30, 50, 10);
    rect(this.x + 300, this.y - 20, 40, 10);
    rect(this.x + 330, this.y - 10, 20, 10);
    rect(this.x + 350, this.y, 20, 10);

    fill("#b4bec0"); //base color
    rect(this.x + 40, this.y + 10, 10, 10);
    rect(this.x + 30, this.y + 20, 10, 10);
    rect(this.x + 360, this.y + 10, 10, 10);
    rect(this.x + 370, this.y + 20, 10, 10);

    fill("#395160"); //blue contour of
    rect(this.x + 140, this.y - 30, 30, 10);
    rect(this.x + 110, this.y - 20, 30, 10);
    rect(this.x + 80, this.y - 10, 30, 10);
    rect(this.x + 60, this.y, 20, 10);
    rect(this.x + 50, this.y + 10, 10, 10);
    rect(this.x + 40, this.y + 20, 10, 10);
    rect(this.x + 30, this.y + 30, 10, 10);
    rect(this.x + 370, this.y + 30, 10, 10);
    rect(this.x + 360, this.y + 20, 10, 10);
    rect(this.x + 350, this.y + 10, 10, 10);
    rect(this.x + 330, this.y, 20, 10);
    rect(this.x + 300, this.y - 10, 30, 10);
    rect(this.x + 270, this.y - 20, 30, 10);
    rect(this.x + 240, this.y - 30, 30, 10);

    //top of small bowl
    fill("#b4bec0"); //base color
    rect(this.x + 130, this.y - 80, 140, 10);
    rect(this.x + 270, this.y - 90, 30, 10);
    rect(this.x + 300, this.y - 100, 10, 10);
    rect(this.x + 310, this.y - 110, 10, 10);
    rect(this.x + 320, this.y - 140, 10, 30);
    rect(this.x + 310, this.y - 150, 10, 10);
    rect(this.x + 270, this.y - 170, 10, 10);
    rect(this.x + 130, this.y - 170, 10, 10);
    rect(this.x + 90, this.y - 150, 10, 10);
    rect(this.x + 80, this.y - 110, 10, 10);
    rect(this.x + 90, this.y - 100, 10, 10);
    rect(this.x + 100, this.y - 90, 10, 10);

    fill("#828b8d"); //darker
    rect(this.x + 240, this.y - 80, 10, 10);
    rect(this.x + 260, this.y - 80, 20, 10);
    rect(this.x + 300, this.y - 90, 10, 10);
    rect(this.x + 310, this.y - 100, 10, 10);
    rect(this.x + 320, this.y - 110, 10, 10);
    rect(this.x + 320, this.y - 110, 10, 10);

    fill("#dee4e3"); //lightest color
    rect(this.x + 110, this.y - 90, 30, 10);
    rect(this.x + 100, this.y - 100, 10, 10);
    rect(this.x + 90, this.y - 110, 10, 10);
    rect(this.x + 80, this.y - 120, 10, 10);
    rect(this.x + 120, this.y - 170, 10, 10);
    rect(this.x + 140, this.y - 180, 30, 10);
    rect(this.x + 240, this.y - 180, 30, 10);
    rect(this.x + 280, this.y - 170, 10, 10);
    rect(this.x + 300, this.y - 160, 20, 10);
    rect(this.x + 320, this.y - 150, 10, 10);

    fill("#f5f5f5"); //highlight color
    rect(this.x + 130, this.y - 180, 10, 10);
    rect(this.x + 110, this.y - 170, 10, 10);
    rect(this.x + 90, this.y - 160, 20, 10);
    rect(this.x + 80, this.y - 150, 10, 30);
    rect(this.x + 270, this.y - 180, 10, 10);
    rect(this.x + 290, this.y - 170, 10, 10);

    //under small bowl
    fill("#828b8d"); //darkest color
    rect(this.x + 280, this.y - 70, 10, 10);
    rect(this.x + 190, this.y - 60, 90, 10);
    rect(this.x + 180, this.y - 50, 70, 10);

    fill("#b4bec0"); //base color
    rect(this.x + 120, this.y - 70, 10, 10);
    rect(this.x + 130, this.y - 60, 60, 10);
    rect(this.x + 160, this.y - 50, 20, 10);
    rect(this.x + 190, this.y - 50, 30, 10);

    //stand
    fill("#828b8d"); //darkest color
    rect(this.x + 220, this.y - 30, 10, 10);
    rect(this.x + 210, this.y + 10, 10, 10);
    rect(this.x + 230, this.y + 10, 10, 20);
    rect(this.x + 220, this.y + 20, 10, 20);
    rect(this.x + 220, this.y + 50, 20, 10);
    rect(this.x + 230, this.y + 40, 20, 10);
    rect(this.x + 240, this.y + 30, 10, 10);

    fill("#b4bec0"); //base color
    rect(this.x + 190, this.y - 30, 30, 40);
    rect(this.x + 190, this.y + 30, 30, 10);
    rect(this.x + 190, this.y + 60, 40, 10);
    rect(this.x + 210, this.y + 50, 10, 10);

    fill("#dee4e3"); //lightest color
    rect(this.x + 180, this.y - 30, 20, 10);
    rect(this.x + 190, this.y - 20, 10, 20);
    rect(this.x + 190, this.y + 10, 20, 10);
    rect(this.x + 170, this.y + 10, 10, 20);
    rect(this.x + 180, this.y + 20, 10, 20);
    rect(this.x + 160, this.y + 30, 10, 20);
    rect(this.x + 170, this.y + 40, 10, 20);
    rect(this.x + 180, this.y + 50, 10, 20);
    rect(this.x + 190, this.y + 50, 20, 10);

    //statue
    fill("#828b8d"); //darkest color
    rect(this.x + 180, this.y - 120, 50, 10);
    rect(this.x + 230, this.y - 160, 10, 40);
    rect(this.x + 210, this.y - 160, 20, 10);
    rect(this.x + 190, this.y - 140, 40, 10);
    rect(this.x + 210, this.y - 180, 20, 10);
    rect(this.x + 210, this.y - 200, 10, 10);

    fill("#b4bec0"); //base color
    rect(this.x + 180, this.y - 130, 50, 10);
    rect(this.x + 190, this.y - 150, 40, 10);
    rect(this.x + 220, this.y - 170, 10, 10);
    rect(this.x + 190, this.y - 170, 10, 10);
    rect(this.x + 210, this.y - 190, 10, 10);

    fill("#dee4e3"); //lightest color
    rect(this.x + 170, this.y - 130, 10, 10);
    rect(this.x + 180, this.y - 150, 10, 20);
    rect(this.x + 170, this.y - 160, 10, 10);
    rect(this.x + 190, this.y - 160, 20, 10);
    rect(this.x + 190, this.y - 160, 10, 10);
    rect(this.x + 190, this.y - 190, 20, 10);
    rect(this.x + 180, this.y - 180, 10, 10);
    rect(this.x + 210, this.y - 170, 10, 10);

    fill("#f5f5f5"); //highlight color
    rect(this.x + 170, this.y - 150, 10, 20);
    rect(this.x + 180, this.y - 170, 10, 20);
    rect(this.x + 190, this.y - 180, 20, 10);
    rect(this.x + 190, this.y - 200, 20, 10);

    //WATER
    //big bowl
    fill("#6f9aa6"); //darkest color
    rect(this.x + 140, this.y - 20, 40, 20);
    rect(this.x + 130, this.y - 10, 40, 20);
    rect(this.x + 100, this.y, 60, 30);
    rect(this.x + 100, this.y + 30, 50, 30);
    rect(this.x + 150, this.y + 50, 10, 10);

    rect(this.x + 230, this.y - 20, 40, 20);
    rect(this.x + 240, this.y, 50, 10);
    rect(this.x + 250, this.y + 10, 50, 20);
    rect(this.x + 310, this.y + 10, 10, 10);
    rect(this.x + 260, this.y + 20, 50, 40);
    rect(this.x + 250, this.y + 50, 10, 10);
    rect(this.x + 240, this.y + 60, 20, 10);

    fill("#95c0c6"); //lighter
    rect(this.x + 160, this.y - 10, 20, 10);
    rect(this.x + 110, this.y - 10, 10, 10);
    rect(this.x + 80, this.y, 10, 10);
    rect(this.x + 50, this.y + 20, 50, 50);
    rect(this.x + 100, this.y + 40, 10, 10);
    rect(this.x + 110, this.y + 50, 10, 10);
    rect(this.x + 100, this.y + 60, 70, 10);
    rect(this.x + 150, this.y + 70, 30, 10);
    rect(this.x + 140, this.y + 80, 40, 10);
    rect(this.x + 190, this.y + 90, 20, 20);
    rect(this.x + 210, this.y + 90, 10, 10);
    rect(this.x + 310, this.y + 20, 50, 50);
    rect(this.x + 230, this.y + 70, 70, 10);
    rect(this.x + 260, this.y + 60, 40, 10);
    rect(this.x + 280, this.y + 50, 30, 10);
    rect(this.x + 290, this.y + 40, 20, 10);
    rect(this.x + 300, this.y, 10, 20);
    rect(this.x + 280, this.y - 10, 10, 10);
    rect(this.x + 260, this.y + 80, 10, 10);

    fill("#bde6e6"); //turquoise
    rect(this.x + 60, this.y + 10, 20, 10);
    rect(this.x + 50, this.y + 20, 10, 20);
    rect(this.x + 30, this.y + 40, 10, 20);
    rect(this.x + 40, this.y + 60, 10, 20);
    rect(this.x + 50, this.y + 70, 10, 10);
    rect(this.x + 60, this.y + 80, 10, 10);
    rect(this.x + 60, this.y + 60, 30, 10);
    rect(this.x + 80, this.y + 70, 30, 10);
    rect(this.x + 100, this.y + 80, 40, 10);
    rect(this.x + 100, this.y + 90, 80, 10);
    rect(this.x + 90, this.y + 100, 80, 10);
    rect(this.x + 170, this.y + 110, 10, 10);

    rect(this.x + 250, this.y + 110, 30, 10);
    rect(this.x + 250, this.y + 100, 50, 10);
    rect(this.x + 230, this.y + 90, 110, 10);
    rect(this.x + 270, this.y + 80, 50, 10);
    rect(this.x + 300, this.y + 70, 30, 10);
    rect(this.x + 320, this.y + 60, 30, 10);
    rect(this.x + 350, this.y + 30, 20, 10);
    rect(this.x + 350, this.y + 20, 10, 10);

    fill("#daf3ee"); //darker highlight
    rect(this.x + 120, this.y - 10, 30, 10);
    rect(this.x + 110, this.y, 20, 10);
    rect(this.x + 90, this.y, 10, 20);
    rect(this.x + 80, this.y + 10, 10, 20);
    rect(this.x + 40, this.y + 30, 10, 30);
    rect(this.x + 50, this.y + 50, 10, 20);
    rect(this.x + 60, this.y + 70, 20, 10);
    rect(this.x + 70, this.y + 90, 30, 10);
    rect(this.x + 90, this.y + 40, 10, 10);
    rect(this.x + 100, this.y + 50, 10, 20);
    rect(this.x + 110, this.y + 70, 10, 10);
    rect(this.x + 140, this.y + 70, 10, 10);
    rect(this.x + 160, this.y + 80, 10, 10);
    rect(this.x + 110, this.y + 100, 50, 10);
    rect(this.x + 130, this.y + 110, 40, 10);
    rect(this.x + 170, this.y + 100, 20, 10);
    rect(this.x + 180, this.y + 110, 70, 10);
    rect(this.x + 180, this.y + 80, 20, 10);

    rect(this.x + 220, this.y + 80, 40, 10);
    rect(this.x + 210, this.y + 100, 40, 10);
    rect(this.x + 260, this.y + 100, 30, 10);
    rect(this.x + 280, this.y + 90, 30, 10);
    rect(this.x + 300, this.y + 100, 20, 10);
    rect(this.x + 320, this.y + 80, 20, 10);
    rect(this.x + 330, this.y + 70, 10, 10);
    rect(this.x + 350, this.y + 60, 20, 10);
    rect(this.x + 360, this.y + 50, 20, 10);
    rect(this.x + 370, this.y + 40, 10, 10);
    rect(this.x + 310, this.y + 50, 10, 10);
    rect(this.x + 300, this.y + 60, 10, 10);
    rect(this.x + 320, this.y + 30, 10, 10);
    rect(this.x + 330, this.y + 10, 10, 20);
    rect(this.x + 320, this.y + 10, 10, 10);
    rect(this.x + 310, this.y, 10, 10);
    rect(this.x + 290, this.y, 10, 10);
    rect(this.x + 270, this.y - 10, 20, 10);
    rect(this.x + 250, this.y - 20, 30, 10);

    fill("#f4fffa"); //lightest highlight
    rect(this.x + 40, this.y + 40, 10, 10);
    rect(this.x + 80, this.y + 40, 10, 10);
    rect(this.x + 70, this.y + 80, 30, 10);
    rect(this.x + 120, this.y + 70, 20, 10);
    rect(this.x + 150, this.y + 80, 10, 10);
    rect(this.x + 180, this.y + 90, 10, 10);
    rect(this.x + 160, this.y + 100, 10, 10);
    rect(this.x + 170, this.y + 110, 10, 10);
    rect(this.x + 210, this.y + 80, 10, 10);
    rect(this.x + 220, this.y + 90, 10, 10);
    rect(this.x + 200, this.y + 110, 40, 10);
    rect(this.x + 310, this.y + 90, 20, 10);
    rect(this.x + 340, this.y + 70, 30, 10);
    rect(this.x + 340, this.y + 80, 10, 10);
    rect(this.x + 360, this.y + 40, 10, 10);
    rect(this.x + 320, this.y + 40, 10, 10);
    rect(this.x + 320, this.y, 10, 10);
    rect(this.x + 290, this.y - 10, 10, 10);

    //small bowl water
    fill("#6f9aa6"); //darkest color
    rect(this.x + 140, this.y - 160, 20, 40);
    rect(this.x + 160, this.y - 120, 10, 10);
    rect(this.x + 170, this.y - 110, 10, 10);
    rect(this.x + 250, this.y - 150, 10, 30);
    rect(this.x + 260, this.y - 140, 10, 10);
    rect(this.x + 240, this.y - 120, 10, 10);
    rect(this.x + 230, this.y - 110, 10, 10);

    fill("#95c0c6"); //lighter
    rect(this.x + 150, this.y - 160, 10, 10);
    rect(this.x + 140, this.y - 150, 10, 10);
    rect(this.x + 130, this.y - 150, 10, 40);
    rect(this.x + 120, this.y - 130, 30, 10);
    rect(this.x + 140, this.y - 120, 20, 10);
    rect(this.x + 150, this.y - 110, 20, 10);
    rect(this.x + 170, this.y - 100, 30, 10);
    rect(this.x + 250, this.y - 100, 20, 10);
    rect(this.x + 280, this.y - 110, 20, 10);
    rect(this.x + 300, this.y - 120, 10, 10);
    rect(this.x + 240, this.y - 110, 10, 10);
    rect(this.x + 250, this.y - 120, 30, 10);
    rect(this.x + 260, this.y - 130, 30, 10);
    rect(this.x + 270, this.y - 150, 10, 20);
    rect(this.x + 260, this.y - 160, 10, 20);
    rect(this.x + 210, this.y - 100, 10, 10);
    rect(this.x + 100, this.y - 140, 10, 10);

    fill("#bde6e6"); //turquoise
    rect(this.x + 110, this.y - 150, 20, 10);
    rect(this.x + 110, this.y - 110, 20, 10);
    rect(this.x + 140, this.y - 100, 30, 10);
    rect(this.x + 220, this.y - 100, 30, 10);
    rect(this.x + 250, this.y - 110, 30, 10);
    rect(this.x + 290, this.y - 120, 10, 10);
    rect(this.x + 290, this.y - 140, 10, 10);
    rect(this.x + 280, this.y - 150, 10, 10);

    fill("#daf3ee"); //darker highlight
    rect(this.x + 110, this.y - 140, 10, 10);
    rect(this.x + 110, this.y - 120, 20, 10);
    rect(this.x + 140, this.y - 110, 20, 10);
    rect(this.x + 190, this.y - 100, 10, 10);
    rect(this.x + 250, this.y - 110, 10, 10);
    rect(this.x + 270, this.y - 120, 20, 10);
    rect(this.x + 290, this.y - 150, 10, 10);
    rect(this.x + 100, this.y - 120, 10, 10);
    rect(this.x + 300, this.y - 140, 10, 10);

    fill("#f4fffa"); //lightest highlight
    rect(this.x + 120, this.y - 140, 10, 10);
    rect(this.x + 110, this.y - 130, 10, 10);
    rect(this.x + 130, this.y - 110, 10, 10);
    rect(this.x + 180, this.y - 100, 10, 10);
    rect(this.x + 290, this.y - 130, 10, 10);
    rect(this.x + 280, this.y - 140, 10, 10);
    rect(this.x + 250, this.y - 160, 10, 10);

    //WATER FALLING
    fill("#f4fffa"); //lightest highlight
    rect(this.x + 190, this.y - 230, 30, 10);
    rect(this.x + 180, this.y - 220, 10, 20);
    rect(this.x + 220, this.y - 220, 10, 20);
    rect(this.x + 60, this.y - 100, 10, 20);
    rect(this.x + 340, this.y - 100, 10, 20);
    rect(this.x + 200, this.y - 200, 10, 20);
    rect(this.x + 200, this.y - 60, 10, 20);
    rect(this.x + 130, this.y - 130, 10, 10);
    rect(this.x + 270, this.y - 130, 10, 10);

    fill("#daf3ee"); //darker highlight
    rect(this.x + 200, this.y - 230, 10, 30);
    rect(this.x + 170, this.y - 200, 10, 20);
    rect(this.x + 140, this.y - 150, 10, 20);
    rect(this.x + 130, this.y - 140, 10, 10);
    rect(this.x + 260, this.y - 150, 10, 20);
    rect(this.x + 270, this.y - 140, 10, 10);
    rect(this.x + 230, this.y - 200, 10, 20);
    rect(this.x + 120, this.y - 130, 10, 10);
    rect(this.x + 280, this.y - 130, 10, 10);
    rect(this.x + 80, this.y - 120, 10, 10);
    rect(this.x + 70, this.y - 120, 10, 10);
    rect(this.x + 60, this.y - 110, 10, 10);
    rect(this.x + 320, this.y - 120, 10, 10);
    rect(this.x + 330, this.y - 120, 10, 10);
    rect(this.x + 340, this.y - 110, 10, 10);
    rect(this.x + 60, this.y - 80, 10, 20);
    rect(this.x + 340, this.y - 80, 10, 20);
    rect(this.x + 200, this.y - 70, 10, 10);
    rect(this.x + 200, this.y - 40, 10, 20);

    fill("#bde6e6"); //turquoise
    rect(this.x + 200, this.y - 220, 10, 10);
    rect(this.x + 160, this.y - 180, 10, 20);
    rect(this.x + 240, this.y - 180, 10, 20);
    rect(this.x + 150, this.y - 160, 10, 10);
    rect(this.x + 250, this.y - 160, 10, 10);
    rect(this.x + 90, this.y - 130, 20, 10);
    rect(this.x + 300, this.y - 130, 20, 10);
    rect(this.x + 60, this.y - 60, 10, 50);
    rect(this.x + 340, this.y - 60, 10, 50);
    rect(this.x + 200, this.y - 20, 10, 50);
    rect(this.x + 200, this.y - 90, 10, 20);
    rect(this.x + 200, this.y - 170, 10, 20);

    fill("#95c0c6"); //almost darkest
    rect(this.x + 200, this.y - 150, 10, 20);
    rect(this.x + 200, this.y - 100, 10, 10);
    rect(this.x + 200, this.y + 30, 10, 30);
    rect(this.x + 60, this.y - 10, 10, 30);
    rect(this.x + 340, this.y - 10, 10, 30);

    fill("#6f9aa6"); //darkest color
    rect(this.x + 200, this.y - 130, 10, 30);
    rect(this.x + 200, this.y + 60, 10, 40);
    rect(this.x + 60, this.y + 20, 10, 30);
    rect(this.x + 340, this.y + 20, 10, 30);
    pop();
  }
}
