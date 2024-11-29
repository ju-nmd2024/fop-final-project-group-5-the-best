export default class Tree {
  construction(x, y, scaleFactor) {
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
    fill("#565d60");
    rect(this.x, y, 10, 20);
    rect(this.x + 10, y + 20, 10, 10);
    rect(this.x + 20, y + 30, 10, 20);
    rect(this.x + 10, y + 50, 10, 10);
    rect(this.x, y + 60, 10, 30);
    rect(this.x + 10, y + 90, 10, 10);
    rect(this.x + 20, y + 100, 20, 10);
    rect(this.x + 30, y + 110, 10, 10);
    rect(this.x + 40, y + 120, 20, 10);
    rect(this.x + 40, y + 130, 10, 20);
    rect(this.x + 50, y + 150, 20, 10);
    rect(this.x + 70, y + 160, 30, 10);
    rect(this.x + 100, y + 150, 20, 10);
    rect(this.x + 120, y + 160, 10, 40);
    rect(this.x + 110, y + 200, 10, 20);
    rect(this.x + 100, y + 220, 10, 10);
    rect(this.x + 90, y + 230, 10, 10);

    rect(this.x + 200, y + 230, 10, 10);
    rect(this.x + 190, y + 220, 10, 10);
    rect(this.x + 180, y + 210, 10, 10);
    rect(this.x + 170, y + 200, 10, 10);
    rect(this.x + 180, y + 160, 10, 40);
    rect(this.x + 170, y + 150, 10, 10);
    rect(this.x + 190, y + 160, 30, 10);
    rect(this.x + 220, y + 150, 30, 10);
    rect(this.x + 220, y + 150, 30, 10);
    rect(this.x + 250, y + 130, 10, 20);
    rect(this.x + 240, y + 120, 20, 10);
    rect(this.x + 260, y + 110, 10, 10);
    rect(this.x + 270, y + 100, 10, 10);
    rect(this.x + 280, y + 80, 10, 20);
    rect(this.x + 290, y + 60, 10, 20);
    rect(this.x + 280, y + 50, 10, 10);
    rect(this.x + 270, y + 40, 10, 10);
    rect(this.x + 280, y + 20, 10, 20);
    rect(this.x + 290, y, 10, 20);
    rect(this.x + 280, y - 20, 10, 20);
    rect(this.x + 270, y - 30, 10, 10);
    rect(this.x + 240, y - 40, 30, 10);
    rect(this.x + 210, y - 50, 30, 10);
    rect(this.x + 190, y - 60, 20, 10);
    rect(this.x + 170, y - 70, 20, 10);
    rect(this.x + 110, y - 80, 60, 10);
    rect(this.x + 90, y - 70, 20, 10);
    rect(this.x + 70, y - 60, 20, 10);
    rect(this.x + 60, y - 50, 10, 10);
    rect(this.x + 50, y - 40, 20, 10);
    rect(this.x + 30, y - 30, 20, 10);
    rect(this.x + 20, y - 20, 10, 10);
    rect(this.x + 10, y - 10, 10, 10);

    //darker part of tree
    fill("#2f6d68"); //main shade/almost darkest
    rect(this.x + 30, y - 20, 240, 120);
    rect(this.x + 60, y + 100, 180, 50);
    rect(this.x + 10, y + 10, 10, 10);
    rect(this.x + 20, y + 20, 10, 10);
    rect(this.x + 10, y + 60, 10, 20);
    rect(this.x + 20, y + 80, 10, 10);
    rect(this.x + 50, y + 100, 10, 20);
    rect(this.x + 270, y + 20, 10, 20);
    rect(this.x + 280, y + 10, 10, 10);
    rect(this.x + 240, y + 100, 20, 20);

    fill("#303e47"); //darkest shade
    rect(this.x + 10, y + 80, 10, 10);
    rect(this.x + 20, y + 90, 40, 10);
    rect(this.x + 50, y + 80, 20, 10);
    rect(this.x + 40, y + 100, 10, 20);
    rect(this.x + 50, y + 130, 10, 20);
    rect(this.x + 60, y + 120, 10, 10);
    rect(this.x + 60, y + 140, 130, 10);
    rect(this.x + 70, y + 150, 30, 10);
    rect(this.x + 100, y + 130, 90, 10);
    rect(this.x + 100, y + 120, 30, 10);
    rect(this.x + 80, y + 110, 30, 10);
    rect(this.x + 190, y + 120, 10, 10);
    rect(this.x + 180, y + 150, 40, 10);
    rect(this.x + 220, y + 140, 30, 10);
    rect(this.x + 240, y + 130, 10, 10);
    rect(this.x + 230, y + 120, 10, 10);
    rect(this.x + 250, y + 110, 10, 10);
    rect(this.x + 260, y + 100, 10, 10);
    rect(this.x + 270, y + 80, 10, 20);
    rect(this.x + 280, y + 70, 10, 10);
    rect(this.x + 240, y + 70, 30, 10);
    rect(this.x + 220, y + 60, 20, 10);
    rect(this.x + 210, y + 50, 10, 10);
    rect(this.x + 210, y + 100, 20, 10);
    rect(this.x + 150, y + 100, 40, 10);
    rect(this.x + 170, y + 110, 10, 10);
    rect(this.x + 130, y + 90, 30, 10);
    rect(this.x + 100, y + 80, 20, 10);
    rect(this.x + 90, y + 70, 10, 10);
    rect(this.x + 80, y + 60, 10, 10);
    rect(this.x + 120, y + 70, 10, 10);
    rect(this.x + 140, y + 60, 10, 10);

    //lightest green/yellow
    fill("#a9c74b");
    rect(this.x + 70, y - 50, 140, 30);
    rect(this.x + 90, y - 60, 100, 10);
    rect(this.x + 110, y - 70, 60, 10);
    rect(this.x + 50, y - 30, 20, 10);
    rect(this.x + 30, y - 20, 70, 20);
    rect(this.x + 20, y - 10, 10, 10);
    rect(this.x + 210, y - 40, 30, 20);
    rect(this.x + 140, y - 30, 130, 30);
    rect(this.x + 130, y, 70, 10);
    rect(this.x + 210, y, 10, 10);
    rect(this.x + 270, y - 20, 10, 10);

    rect(this.x + 230, y + 40, 40, 10);
    rect(this.x + 250, y + 50, 30, 10);

    rect(this.x + 180, y + 70, 30, 10);
    rect(this.x + 190, y + 80, 30, 10);

    rect(this.x + 100, y + 90, 30, 10);
    rect(this.x + 120, y + 100, 30, 10);

    rect(this.x + 110, y + 50, 30, 10);
    rect(this.x + 100, y + 40, 30, 10);

    rect(this.x + 30, y + 50, 30, 10);
    rect(this.x + 40, y + 60, 30, 10);

    //green green
    fill("#47ab51");
    rect(this.x + 20, y + 50, 10, 30);
    rect(this.x + 30, y + 60, 10, 30);
    rect(this.x + 40, y + 70, 10, 20);
    rect(this.x + 50, y + 70, 30, 10);
    rect(this.x + 30, y + 40, 20, 10);

    rect(this.x + 80, y + 90, 20, 10);
    rect(this.x + 70, y + 100, 50, 10);
    rect(this.x + 110, y + 110, 60, 10);

    rect(this.x + 190, y + 100, 20, 10);
    rect(this.x + 160, y + 90, 80, 10);
    rect(this.x + 140, y + 80, 50, 10);
    rect(this.x + 150, y + 70, 30, 10);

    rect(this.x + 100, y + 70, 20, 10);
    rect(this.x + 90, y + 60, 50, 10);
    rect(this.x + 80, y + 50, 30, 10);
    rect(this.x + 140, y + 50, 20, 10);
    rect(this.x + 90, y + 30, 10, 20);
    rect(this.x + 100, y + 20, 20, 20);

    rect(this.x + 200, y + 40, 30, 10);
    rect(this.x + 220, y + 50, 30, 10);
    rect(this.x + 240, y + 60, 50, 10);
    rect(this.x + 270, y + 70, 10, 10);

    rect(this.x + 210, y + 10, 70, 10);
    rect(this.x + 220, y, 70, 10);
    rect(this.x + 240, y - 10, 40, 10);

    rect(this.x + 190, y - 10, 30, 10);
    rect(this.x + 180, y - 20, 50, 10);
    rect(this.x + 190, y - 30, 10, 10);

    rect(this.x + 160, y, 30, 10);
    rect(this.x + 130, y + 10, 60, 10);
    rect(this.x + 140, y + 20, 40, 10);
    rect(this.x + 120, y, 10, 10);

    rect(this.x + 140, y - 20, 10, 10);
    rect(this.x + 160, y - 30, 10, 10);
    rect(this.x + 150, y - 40, 30, 10);
    rect(this.x + 130, y - 50, 20, 10);

    rect(this.x + 70, y - 30, 60, 10);
    rect(this.x + 80, y - 20, 50, 10);
    rect(this.x + 100, y - 10, 10, 10);

    rect(this.x + 30, y - 10, 30, 10);
    rect(this.x + 10, y, 90, 10);
    rect(this.x + 20, y + 10, 60, 10);
    rect(this.x + 40, y + 20, 30, 10);

    //trunk
    fill("#8b4029");
    rect(this.x + 130, y + 160, 40, 80);
    rect(this.x + 120, y + 200, 10, 30);
    rect(this.x + 190, y + 230, 10, 10);
    rect(this.x + 170, y + 170, 10, 10);
    rect(this.x + 120, y + 150, 10, 10);

    fill("#6f272a");
    rect(this.x + 110, y + 230, 10, 10);
    rect(this.x + 170, y + 220, 20, 20);
    rect(this.x + 160, y + 200, 10, 10);
    rect(this.x + 150, y + 210, 10, 10);
    rect(this.x + 170, y + 180, 10, 20);
    rect(this.x + 150, y + 180, 10, 10);
    rect(this.x + 130, y + 170, 10, 10);
    rect(this.x + 140, y + 140, 30, 30);
    rect(this.x + 170, y + 160, 10, 10);
    rect(this.x + 120, y + 140, 10, 10);

    fill("#c77649");
    rect(this.x + 100, y + 230, 10, 10);
    rect(this.x + 110, y + 220, 10, 10);
    rect(this.x + 140, y + 210, 10, 10);
    rect(this.x + 150, y + 220, 10, 10);
    rect(this.x + 170, y + 210, 10, 10);
    rect(this.x + 180, y + 220, 10, 10);
    rect(this.x + 130, y + 150, 10, 10);
    rect(this.x + 140, y + 160, 10, 10);

    fill("#3b1a2f");
    rect(this.x + 120, y + 230, 20, 10);
    rect(this.x + 130, y + 220, 10, 10);
    rect(this.x + 160, y + 220, 10, 10);
    rect(this.x + 170, y + 230, 10, 10);
    rect(this.x + 130, y + 180, 20, 10);
    rect(this.x + 130, y + 190, 10, 10);
    rect(this.x + 160, y + 160, 10, 10);
    rect(this.x + 150, y + 150, 20, 10);
    rect(this.x + 130, y + 140, 30, 10);
    rect(this.x + 110, y + 130, 20, 10);
    rect(this.x + 160, y + 130, 20, 10);
    rect(this.x + 180, y + 120, 10, 10);
    pop();
  }
}
