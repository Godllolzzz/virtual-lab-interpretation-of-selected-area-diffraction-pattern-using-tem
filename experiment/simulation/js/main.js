// vaccum slider
 // JavaScript to update the displayed value when the slider changes
 const vacuumSlider = document.getElementById("vacuum-slider");
 const vacuumValue = document.getElementById("vacuum-value");

 vacuumSlider.addEventListener("input", () => {
     if (vacuumSlider.value === "0") {
         vacuumValue.innerText = "Low Voltage";
     } else if (vacuumSlider.value === "1") {
         vacuumValue.innerText = "High Voltage";
     }
     
 });

 // JavaScript function to handle the "Set" button click
 function setVacuum() {
     const selectedValue = vacuumSlider.value;
     if (selectedValue === "0") {
         alert("Vacuum set to Low Voltage");
     } else if (selectedValue === "1") {
         alert("Vacuum set to High Voltage");
     } else {
         alert("Invalid selection");
     }
 }

// JavaScript to update the displayed value when the slider changes
const magnificationSlider = document.getElementById("magnification-slider");
const magnificationValue = document.getElementById("magnification-value");

magnificationSlider.addEventListener("input", () => {
    const magnificationLevels = ["LOW", "MEDIUM", "HIGH", "VERY HIGH"];
    const selectedValue = magnificationLevels[magnificationSlider.value];
    magnificationValue.innerText = selectedValue;
});

// JavaScript function to handle the "Set" button click
function setMagnification() {
    const magnificationLevels = ["LOW", "MEDIUM", "HIGH", "VERY HIGH"];
    const selectedValue = magnificationLevels[magnificationSlider.value];
    alert(`Magnification set to ${selectedValue}`);
}

// for switch button accessibility
document.getElementById("toggle").addEventListener("change",function() {
    this.setAttribute("aria-checked",this.checked);
  });

// beam 
// Get the first canvas element with the id "beam" and its 2D rendering context.
var beamCanvas = document.getElementById("beam");
var ctx = beamCanvas.getContext('2d');

// Initialize variables for the first beam's position, width, and timer.
var beamy = 0,
    beamx = parseInt(beamCanvas.width / 2),
    beamWidth, beamTimer = -1;

// Get the second canvas element with the id "beam2" and its 2D rendering context.
var beamCanvas2 = document.getElementById("beam2");
var ctx2 = beamCanvas2.getContext('2d');

// Initialize variables for the second beam's position, width, and timer.
var beam2H = beamCanvas2.height,
    beam2W = beamCanvas2.width,
    beamx2 = parseInt(beamCanvas2.width / 2),
    beamTimer2 = -1;

// Add a click event listener to the HTML element with id "on".
document.getElementById("on").addEventListener("click", function() {
    // Change the background color of the "on" button.
    var onButton = document.getElementById("on");
    onButton.style.backgroundColor = '#21e76e';

    // Clear both beam animations and reset their positions.
    clearInterval(beamTimer);
    clearInterval(beamTimer2);
    beamy = 0;
    ctx.clearRect(0, 0, beamCanvas.width, beamCanvas.height);
    ctx2.clearRect(0, 0, beam2W, beam2H);
    beamTimer = beamTimer2 = -1;

    // Start the animation for the first beam.
    beamTimer = setInterval(drawBeam, 10);

    // Display a message using a custom "type" function.

    // Enable the slider input element with id "avslider".
    var avSlider = document.getElementById("avslider");
    avSlider.disabled = false;
});

// Function to draw the first beam.
function drawBeam() {
    // Begin drawing on the first canvas.
    ctx.beginPath();

    // Calculate the width of the beam based on a sine wave.
    beamWidth = Math.sin(beamy * Math.PI / 140) * 7;

    // Set shadow properties for a glowing effect.
    ctx.shadowBlur = 1;
    ctx.shadowColor = 'red';
    ctx.strokeStyle = "red";
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = beamWidth;

    // Draw three lines to create a glowing effect.
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    ctx.shadowOffsetX = -beamWidth / 2;
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    ctx.shadowOffsetX = beamWidth / 2;
    ctx.moveTo(beamx, beamy);
    ctx.lineTo(beamx + 1, beamy);
    ctx.stroke();

    // Draw the main beam.
    ctx.shadowOffsetX = -beamWidth;
    ctx.moveTo(beamx, beamy);
    beamy += 1;
    ctx.lineTo(beamx, beamy);
    ctx.stroke();

    // When the beam reaches the canvas's height, switch to the second beam animation.
    if (beamy >= beamCanvas.height) {
        clearInterval(beamTimer);
        beamTimer = -1;
        beamTimer2 = setInterval(drawBeam2, 100);

        // Get the selected option from a dropdown and switch between two images accordingly.

    }
}

// Function to draw the second beam.
function drawBeam2() {
    // Begin drawing on the second canvas and clear previous drawings.
    ctx2.beginPath();
    ctx2.clearRect(0, 0, beam2W, beam2H);

    // Set stroke style for the second beam.
    ctx2.strokeStyle = "black";

    // Draw two lines to create a different effect for the second beam.
    ctx2.moveTo(beamx2, 23);
    ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
    ctx2.moveTo(beamx2 - 6, 23);
    ctx2.lineTo(beamx2 + 60 + randEx(-5, 5), randEx(-10, 5));
    ctx2.stroke();
}

// Function to generate a random number between min and max.
function randEx(min, max) {
    return Math.random() * (max - min) + min;
}

// load sample/ drag and drop sample
/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);
}