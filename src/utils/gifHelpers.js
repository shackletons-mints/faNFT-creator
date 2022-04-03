// import * as CanvasCapture from 'canvas-capture'

// export const generateFanGif = ({ title }) => {
//   CanvasCapture.init(document.getElementById('app'), {
//     verbose: false,
//     showAlerts: false,
//     showDialogs: false,
//     showRecDot: false,
//   })

//   CanvasCapture.beginGIFRecord({ fps: 60, name: title })

//   setTimeout(() => {
//     CanvasCapture.stopRecord()
//   }, 5500)
// }

// export const recordFramesForGif = () => {
//   if (CanvasCapture.isRecording()) {
//     CanvasCapture.recordFrame()
//   }
// }

import FileSaver from 'file-saver'

// TODO:
// we will need to step the html like we have it set up in ticket
// this will make downloding mp4s way more consistent and less of a headache

// to ensure that we don't get multiple downloads
const once = (fn, context) => {
	var result;

	return function() {
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

export const generateFanGif = (title) => {
    var canvas = document.querySelector("canvas")
    var ctx = canvas.getContext("experimental-webgl")

    var video = document.querySelector("video")

    var videoStream = canvas.captureStream(60)
    var mediaRecorder = new MediaRecorder(videoStream)

    var chunks = []
    mediaRecorder.ondataavailable = function (e) {
        chunks.push(e.data)
    };

    mediaRecorder.onstop = function (e) {
        var blob = new Blob(chunks, { 'type' : 'video/mp4' })
        chunks = []
        var videoURL = URL.createObjectURL(blob)
        video.src = videoURL
        setTimeout(() => {
            // we will need to get the title here
            once(FileSaver.saveAs(videoURL, `test.mp4`))
        }, 8000)
    };

    setTimeout(() => { mediaRecorder.start() }, 500)
    setTimeout(function () { mediaRecorder.stop() }, 5000)

}