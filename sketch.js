// Define the global variables: img, offset, and easing.
// Set offset to 0 and easing to 0.05 for moving the
// transparent image with the cursor position.
let img;
let offset = 0;
let easing = 0.05;

function preload() {
  // Load the bottom image from the canvas's assets directory.
  img = loadImage('/pictures/throw1.png');
}

function setup() {
  describe(
    "stuff and nonsense."
  );

  var pictureAnalysis = createCanvas(720, 400);
  pictureAnalysis.parent('pictureHolder'); 

  colorMode(HSB);
}

function draw() {
  // Display the bottom image at full opacity.
  tint(255, 128);
  image(img, 0, 0);

  // Define dx as the rate at which the top image
  // moves with the cursor. The offset variable
  // delays the movement of the image.
  //let dx = mouseX - img.width / 2 - offset;
  //offset += dx * easing;

  // Display the top image at half opacity.
  //tint(255, 127);
  //image(img, offset, 0);

  let checkbox = document.getElementById("checkbox");
  if ( checkbox.checked ) {
    document.getElementById("text").innerHTML = " Check box is checked. ";
  } else {
    document.getElementById("text").innerHTML = "";
         };

  if (mouseIsPressed === true) {
    strokeWeight(10);
    stroke(209, 55, 17);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  // let checkbox = document.getElementById("checkbox");
  // if ( checkbox.checked ) {
    //let lineHue = mouseX - mouseY;
    //stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  // } else {
    // document.getElementById("text").innerHTML = "";
        //  };
}