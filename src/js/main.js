
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");     
    clearTimeout(c);
  }, 1000);
};

var controlAudio = document.getElementById('Toque');
var audio = document.getElementById('mySong');
var audioPlaying = false;
var firstPlay = true;
var currentTime = 0;

document.body.addEventListener('click', function() {
   if (!audioPlaying) {
      if (firstPlay) {
         audio.currentTime = 29;
         firstPlay = false;
      }
      audio.play().then(function() {
         // Reproducción exitosa
         console.log('Audio reproduciéndose');
         audioPlaying = true;
         controlAudio.textContent = '';
      }).catch(function(error) {
         // Manejar errores de reproducción
         console.error('Error al reproducir audio:', error);
      });
   } else {
      audio.pause();
      audioPlaying = false;
      controlAudio.textContent = '';
   }
});
