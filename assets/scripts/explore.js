// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeakInput = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("img");

  let synth = window.speechSynthesis;
  let voices = [];

  // Function to populate the voices dropdown
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

  // Load voices when page loads
  populateVoices();

  // Listen for changes in voices list
  synth.onvoiceschanged = populateVoices;

  // Function to speak the text
  function speakText() {
    const selectedVoice = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeakInput.value);
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
      synth.speak(utterance);
      // Change face to open mouth while speaking
      faceImage.src = "assets/images/smiling-open.png";
      utterance.onend = () => {
        // Change face back to smiling when speech ends
        faceImage.src = "assets/images/smiling.png";
      };
    } else {
      alert("Please select a voice from the dropdown.");
    }
  }

  // Event listener for talk button click
  talkButton.addEventListener("click", speakText);
}