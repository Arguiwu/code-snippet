const ratio = height / width
let width, height, image;

if(ratio < 0.4) {
	width = 204
	height = 510
	image.classList.add('overflowHeight') //高度移除隐藏
}else if(ratio >= 0.4 && ratio <= 0.5) {
	width = 204
	height = 204 / ratio
}else if(ratio > 0.5 && ratio < 1) {
	width = 405 * ratio
	height = 405
}else if(ratio >= 1 && ratio < 2) {
	height = 405 * (1/ratio)
	width = 405
}else if(ratio >= 2 && ratio < 2.5) {
	height = 204
	width = 204 / (1/ratio)
}else if(ratio >= 2.5) {
	width = 510
	height = 204
	image.classList.add('overflowWidth')
}
height / 3
width / 3