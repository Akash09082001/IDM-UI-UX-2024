const playVideo = (videoElement) => {
    window.addEventListener('load', () => {
        videoElement.play();
    });
}

// Example usage
const myVideo = document.getElementById("myVideo");
const myVideo1 = document.getElementById("myVideo1");
const myVideo2 = document.getElementById("myVideo2");
const myVideo3 = document.getElementById("myVideo3");

playVideo(myVideo);
playVideo(myVideo1);
playVideo(myVideo2);
playVideo(myVideo3);
