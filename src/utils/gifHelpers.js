import * as CanvasCapture from 'canvas-capture'

export const generateFanGif = ({ title }) => {
  CanvasCapture.init(document.getElementById('app'), {
    verbose: false,
    showAlerts: false,
    showDialogs: false,
    showRecDot: false,
  })

  CanvasCapture.beginGIFRecord({ fps: 60, name: title })

  setTimeout(() => {
    CanvasCapture.stopRecord()
  }, 5500)
}

export const recordFramesForGif = () => {
  if (CanvasCapture.isRecording()) {
    CanvasCapture.recordFrame()
  }
}
