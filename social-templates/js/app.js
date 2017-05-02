var canvas = document.getElementById("canvas")
var downloadLnk = document.getElementById('download')

var card_preview = new Vue({
	el: '#card-wrapper',
	data: {
		image_url: '',
		name: '',
		topic: ''
	}
})

function preview() {
	console.log('preview');
	var html_container = document.getElementById("card-display"),
		html = html_container.innerHTML

	rasterizeHTML.drawHTML(html, canvas, {
		executeJs: true
	}).then(function success(renderResult) {
		var dt = canvas.toDataURL()
		location = dt
	})
}

downloadLnk.addEventListener('click', preview, false)
