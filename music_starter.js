let firstRun = true
let base;
let yOffset = 0; 
let angle = 0; 
let originalBaseX = -60; 
let originalBaseY = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(vocal, drum, bass, other, counter) {
    background(203, 94, 61);
    rectMode(CENTER);
    colorMode(RGB);

    if (firstRun) {
      base = loadImage('bubbleislandcloud.png');
      animals = loadImage('animals.png');
      fire1 = loadImage('fire1.png');
      fire2 = loadImage('fire2.png');
      clouds = loadImage('cloudsss.png');
      firstRun = false
    }

  let bassBrightness = map(bass, 0, 100, 5, 100); // map brightnessbass
  let bassSize = map(bass, 0, 100, 180, 200); // map size bass
  
    // sun bass level brightneess
    fill(228, 208, bassBrightness); // Hue (yellow), Saturation, Brightness
    noStroke(); // No outline
  
    let sunSize = bassSize; // sun v bass
    ellipse(560, 325, sunSize, sunSize); // sun size and position

    // animal movement
    yOffset = 8 * sin(frameCount * 2.2 + PI); // Adjust the values to increase the movement

     // angle of circle 
    let radius = 4; // Radius of the circular path
    let baseX = originalBaseX + radius * cos(angle); // Calculate x position in a circle
    let baseY = originalBaseY + radius * sin(angle); // Calculate y position in a circle

    // move animals
    image(animals, -60, 10 + yOffset);
  
    // island base layer
    image(base, baseX, baseY);

    // angle of island movement
    angle += 2;   


// fire1 and fire 2
if (bass > 40) {
  fireImage = fire2;
} else {
  fireImage = fire1;
}
  // fire image load
  image(fireImage, baseX, baseY);


    // move clouds
    image(clouds, -60, 10 + yOffset);
  
}
















