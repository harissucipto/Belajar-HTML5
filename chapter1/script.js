function speak() {
  console.log('yo');
  var voice = new SpeechSynthesisUtterance();
  voice.text = 'this is  the shoreline at shanghai, china';
  speechSynthesis.speak(voice);
}
