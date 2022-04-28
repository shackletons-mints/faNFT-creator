import FileSaver from 'file-saver'

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

    var video = document.querySelector("video")

    var videoStream = canvas.captureStream(60)
    var options = {
        videoBitsPerSecond : 5000000,
      }
    var mediaRecorder = new MediaRecorder(videoStream, options )

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
            once(FileSaver.saveAs(videoURL, `${title}.mp4`))
        }, 9000)
    };

    setTimeout(() => { mediaRecorder.start() }, 500)
    setTimeout(function () { mediaRecorder.stop() }, 7000)

}