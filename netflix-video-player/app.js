const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');

const playButton = document.querySelector('.video-container .controls button.play');
const rewindButton = document.querySelector('.video-container .controls button.rewind');
const fastForwardButton = document.querySelector('.video-container .controls button.fast-forward');
const volumeButton = document.querySelector('.video-container .controls button.volume');
const fullScreenButton = document.querySelector('.video-container .controls button.full-screen');

const watchedBar = document.querySelector('.video-container .progress-controls .progress-bar .watched-bar');

watchedBar.style.width = '0px';

const playPause = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const toggleMute = () => {
  video.muted = !video.muted;
};

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    playPause(); 
  }

  if (event.code === 'KeyM') {
    toggleMute();
  }
});

video.addEventListener('timeupdate', () => {
  watchedBar.style.width = ((video.currentTime / video.duration) * 100) + '%';
});

playButton.addEventListener('click', playPause);

rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

fastForwardButton.addEventListener('click', () => {
  video.currentTime += 10;
});

volumeButton.addEventListener('click', toggleMute);

fullScreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});