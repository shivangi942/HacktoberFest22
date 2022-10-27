async function recordScreen() {
  const mimeType = "video/webm";
  shouldStop = false;
  const constraints = {
    video: true,
  };
  const displayStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true,
  });
  // voiceStream for recording voice with screen recording
  const voiceStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  let tracks = [...displayStream.getTracks(), ...voiceStream.getAudioTracks()];
  const stream = new MediaStream(tracks);
  handleRecord({ stream, mimeType });
}
