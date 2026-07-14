class AudioRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordings = [];
    this.isRecording = false;
    this.stream = null;
  }
  async start() {
    if (this.isRecording) return;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'audio/webm' });
      this.audioChunks = [];
      this.mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) this.audioChunks.push(e.data);
      };
      this.mediaRecorder.start();
      this.isRecording = true;
      return true;
    } catch (err) {
      console.error('Microphone error:', err);
      return false;
    }
  }
  stop() {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || !this.isRecording) { resolve(null); return; }
      this.mediaRecorder.onstop = () => {
        this.isRecording = false;
        if (this.stream) { this.stream.getTracks().forEach(t => t.stop()); this.stream = null; }
        const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        this.recordings.push({ url, blob, timestamp: Date.now() });
        resolve({ url, blob });
      };
      this.mediaRecorder.stop();
    });
  }
  getRecordings() { return this.recordings; }
  deleteRecording(index) {
    if (index >= 0 && index < this.recordings.length) {
      URL.revokeObjectURL(this.recordings[index].url);
      this.recordings.splice(index, 1);
    }
  }
  clearAll() {
    this.recordings.forEach(r => URL.revokeObjectURL(r.url));
    this.recordings = [];
  }
}

let audioRecorder = null;
function getRecorder() {
  if (!audioRecorder) audioRecorder = new AudioRecorder();
  return audioRecorder;
}
