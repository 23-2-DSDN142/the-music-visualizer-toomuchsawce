let firstRun = true
let base;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(vocal, drum, bass, other, counter) {
    background(203, 94, 61);
    rectMode(CENTER);
    colorMode(RGB);

    if (firstRun) {
      base = loadImage('bubbleislandcloud.png');
      animals = loadImage('animals.png');

      firstRun = false
    }


  // draw animals
  push();
  image(animals, -60, -0);
  pop();

  // draw island base layer
  push();
  image(base, -60, 0);
  pop();



  let bassMap = map(bass, 0, 100, 0, 60);


  }  







