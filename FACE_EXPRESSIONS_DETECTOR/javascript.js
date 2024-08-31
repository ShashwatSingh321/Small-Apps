const video = document.querySelector('.video');
let stream = null;
function startVideo(){
    navigator.mediaDevices.getUserMedia({video:true}).then(mediaStream =>{
        stream = mediaStream;

        video.srcObject = stream;
    }).catch(err =>console.error("Error accessing webcam", err))
}
function applyfilter(filter){
    video.style.filter = filter;
}

function stopVideo() {
    if (stream) {
        // Stop all tracks in the stream to properly turn off the webcam
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null; // Remove video source
        stream = null; // Clear the stream reference
    }
}