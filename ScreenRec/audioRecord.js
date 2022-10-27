async function recordAudio() {
  const mimeType = "audio/webm";
  shouldStop = false;
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  handleRecord({ stream, mimeType });
}
