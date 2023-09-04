// switch on/off
// Get the DOM elements
const switchToggle = document.getElementById('toggle');
const textContainer = document.querySelector('.header-bar > div > b');

// Add an event listener to the toggle switch
switchToggle.addEventListener('change', function() {
if (this.checked) {
    // Switch is ON
    textContainer.textContent = "Now pick a sample and place on the holder";
} else {
    // Switch is OFF
    textContainer.textContent = "Welcome to the simulator .Switch on the Button";
}
});

// beam
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');

let waveAmplitude = 12; // Amplitude of the wave
let waveFrequency = 0.02; // Frequency of the wave
let waveSpeed = 2; // Speed of the wave animation
let waveColor = 'red';
let animationFrame;
let isWaveOn = false;
let yOffset = 0; // Vertical offset

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);

    ctx.lineWidth = 4; // Increase this value for a thicker wave

    for (let y = 0; y < canvas.height; y++) {
        const x = canvas.width / 2 + waveAmplitude * Math.sin(waveFrequency * y - waveSpeed * performance.now() / 1000 + yOffset);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = waveColor;
    ctx.stroke();

    if (isWaveOn) {
        yOffset += waveSpeed;
        animationFrame = requestAnimationFrame(drawWave);
    }
}

startButton.addEventListener('click', () => {
    isWaveOn = !isWaveOn;

    if (isWaveOn) {
        drawWave();
    } else {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
});

// accelerating voltage
const voltageSlider = document.getElementById('voltageSlider');
const imageElement = document.getElementById('image');

voltageSlider.addEventListener('input', () => {
  const sliderValue = voltageSlider.value;
  const imageIndex = sliderValue / 5; // Assuming each step represents 5 kV

  const images = [
    '../images/outputs/Adeno_virus.jpg',
    '../images/outputs/download.png',
    '../images/outputs/all.png',
    '../images/outputs/cell.png',
    '../images/outputs/zoom.png'
  ];

  if (imageIndex < images.length) {
    imageElement.src = images[imageIndex];
  }
});