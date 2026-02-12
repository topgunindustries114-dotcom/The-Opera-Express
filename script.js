// Audio elements
const backgroundMusic = document.getElementById('backgroundMusic');
const keySound = document.getElementById('keySound');
const openSound = document.getElementById('openSound');
const closeSound = document.getElementById('closeSound');
const musicToggle = document.getElementById('musicToggle');
const soundToggle = document.getElementById('soundToggle');

// State variables
let musicPlaying = false;
let soundEnabled = true;

// Music toggle button
if (musicToggle) {
  musicToggle.addEventListener('click', function() {
    if (musicPlaying) {
      backgroundMusic.pause();
      musicToggle.textContent = '🎵 Play Music';
      musicPlaying = false;
    } else {
      backgroundMusic.play();
      musicToggle.textContent = '⏸️ Pause Music';
      musicPlaying = true;
    }
  });
}

// Sound toggle button
if (soundToggle) {
  soundToggle.addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
  });
}

// Play key sound on any key press
document.addEventListener('keydown', function(event) {
  if (soundEnabled && keySound) {
    keySound.currentTime = 0;
    keySound.play().catch(error => {
      console.log('Sound playback failed:', error);
    });
  }
});

// Play opening sound when page loads
window.addEventListener('load', function() {
  if (openSound) {
    openSound.play().catch(error => {
      console.log('Opening sound playback failed:', error);
    });
  }

  if (backgroundMusic) {
    backgroundMusic.play().catch(error => {
      console.log('Background music autoplay blocked by browser');
    });
    musicPlaying = true;
    if (musicToggle) {
      musicToggle.textContent = '⏸️ Pause Music';
    }
  }
});

// Play closing sound when closing
window.addEventListener('beforeunload', function() {
  if (closeSound) {
    closeSound.currentTime = 0;
    closeSound.play().catch(error => {
      console.log('Closing sound playback failed:', error);
    });
  }
});
