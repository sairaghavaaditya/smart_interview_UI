

// Get the video element
const video = document.getElementById('webcam-video');

// Request access to the webcam
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Set the video source to the webcam stream
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.error('Error accessing webcam:', error);
            // Handle error if access to the webcam is denied
        });
}

function goBack() {
    window.location.href = '/candidate/simulation/my simulation page/my-simulations.html';
}

function startInterview() {
    window.location.href = '/candidate/simulation/my simulation page/start simulation mage/simulation session/simulation-session.html';
}
