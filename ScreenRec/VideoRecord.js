async function recordVideo() {
  const mimeType = "video/webm";
  shouldStop = false;
  const constraints = {
    audio: true,
    video: true,
  };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleRecord({ stream, mimeType });
}
