const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');

const playButton = document.querySelector('.video-container .controls button.play');
const rewindButton = document.querySelector('.video-container .controls button.rewind');
const fastForwardButton = document.querySelector('.video-container .controls button.fast-forward');
const volumeButton = document.querySelector('.video-container .controls button.volume');
const fullScreenButton = document.querySelector('.video-container .controls button.full-screen');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

fastForwardButton.addEventListener('click', () => {
  video.currentTime += 10;
});

volumeButton.addEventListener('click', () => {
  video.muted = !video.muted;
});

fullScreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});