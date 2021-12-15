import * as CanvasCapture from 'canvas-capture'

// Need an async pipe to verify steps:
// 1 - await scene rendered
// 2 - record gif
// 3 - await generate and save gif
// 4 - clear scene
// timeouts are fragile
export const generateFanGif = ({ title }) => {

    CanvasCapture.init(document.getElementById('app'), {
      verbose: false,
      showAlerts: false,
      showDialogs: false,
      showRecDot: false,
    })

    // verify quality params, pass in specific title
    CanvasCapture.beginGIFRecord({ fps: 30, name: title })    

  setTimeout(() => {
    CanvasCapture.stopRecord()
  }, 7500)
}

export const recordFramesForGif = () => {
  if (CanvasCapture.isRecording()) {
    // start recording when we know for a fact the fan has fully rendered
    // can we check for a scene property?  scene.isRendered? something like that
    CanvasCapture.recordFrame()
  }
}
