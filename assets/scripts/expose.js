// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const play= document.querySelector('button');
  const hornimg = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  horn.addEventListener('change',function(){
    const hornselected = horn.nodeValue;
    if(hornselected === 'air-horn'){
      hornImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    }else if(hornselected === 'car-horn'){
      hornImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    }
    else if(hornselected === 'party-horn'){
      hornImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  volume.addEventListener('input',function(){
    const vol = volume.nodeValue;
    if(vol === 0){
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-0.svg';
    }
    else if(vol < 33){
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-1.svg';
    }
    else if(vol<67){
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-2.svg';
    }
    else{
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-3.svg';
    }
    audio.vol = vol/100;
  });

  play.addEventListener('click', function(){
    audio.play();
    const hornselected = horn.nodeValue;
    if(selectedHorn === 'party-horn'){
      confetti();
    }
  });
}