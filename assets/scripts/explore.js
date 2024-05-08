// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeakInput = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("img");

  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("value", voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  synth.onvoiceschanged = populateVoices;

  function speakText() {
    const selectedVoice = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeakInput.value);
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
      synth.speak(utterance);
      faceImage.src = "assets/images/smiling-open.png";
      utterance.onend = () => {
        faceImage.src = "assets/images/smiling.png";
      };
    } else {
      alert("Please select a voice from the dropdown.");
    }
  }

  talkButton.addEventListener("click", speakText);
}