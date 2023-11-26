const synth = window.speechSynthesis;

function speak(description) {
  const utterThis = new SpeechSynthesisUtterance(description);
  if (!synth.speaking) {
    const voices = synth.getVoices();
    utterThis.voice = voices[0];
    synth.speak(utterThis);
  }
}

function restart() {
  if (synth.speaking) {
    synth.pause();
    synth.cancel();
    speak();
  }
}

function stop() {
  if (synth.speaking) {
    synth.pause();
    synth.cancel();
  }
}
