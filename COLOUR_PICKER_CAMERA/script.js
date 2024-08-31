const video = document.getElementById('webcam');
const colorDisplay = document.getElementById('color-display');

// Function to start webcam
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}

// Function to capture the color of the pixel under the mouse
function captureColor(event) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the mouse coordinates relative to the video element
    const rect = video.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Adjust the x-coordinate for the horizontal flip
    const adjustedX = canvas.width - mouseX;

    // Get the pixel color at the adjusted mouse position
    const pixel = context.getImageData(adjustedX, mouseY, 1, 1).data;
    const [r, g, b] = pixel;

    // Display the color in the color display div
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgbColor;
    colorDisplay.textContent = rgbToHex(r, g, b);
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// Start the webcam
startWebcam();

// Add a mousemove event listener to the video element
video.addEventListener('mousemove', captureColor);
