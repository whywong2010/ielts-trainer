class TTSPlayer {
  constructor() {
    this.voices = [];
    this.currentVoice = null;
    this.rate = 1.0;
    this.accent = 'uk';
    this.ready = false;
    this.init();
  }
  init() {
    if (!window.speechSynthesis) return;
    const loadVoices = () => {
      this.voices = window.speechSynthesis.getVoices();
      this.selectVoice();
      this.ready = true;
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }
  selectVoice() {
    const lang = this.accent === 'uk' ? 'en-GB' : 'en-US';
    this.currentVoice = this.voices.find(v => v.lang.startsWith(lang)) || null;
    if (!this.currentVoice) {
      this.currentVoice = this.voices.find(v => v.lang.startsWith('en')) || null;
    }
  }
  setAccent(accent) {
    this.accent = accent;
    this.selectVoice();
  }
  setRate(rate) { this.rate = rate; }
  speak(text, onEnd) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = this.accent === 'uk' ? 'en-GB' : 'en-US';
    u.rate = this.rate;
    u.pitch = 1.0;
    u.volume = 1.0;
    if (this.currentVoice) u.voice = this.currentVoice;
    if (onEnd) u.onend = onEnd;
    window.speechSynthesis.speak(u);
  }
  speakSentence(sentence, onEnd) {
    this.speak(sentence, onEnd);
  }
  speakWord(word, onEnd) {
    this.speak(word, onEnd);
  }
  stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
  isSpeaking() {
    return window.speechSynthesis && window.speechSynthesis.speaking;
  }
}

let ttsPlayer = null;
function getTTS() {
  if (!ttsPlayer) ttsPlayer = new TTSPlayer();
  return ttsPlayer;
}
