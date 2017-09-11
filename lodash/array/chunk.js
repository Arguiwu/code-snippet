const slice = require('./slice')

/*
	@param {Array} array 目标数组
	@param {number} size=1 需要切割的大小
	@returns {Array} 返回新的数组
*/

function chunk(array, size) {
	size = Math.max(size, 0)
	const length = array === null ? 0 : array.length
	if(!length || size < 1) {
		return []
	}
	let index = 0
	let resIndex = 0
	const result = new Array(Math.ceil(length / size))

	while(index < length) {
		result[resIndex++] = slice(array, index, (index += size))
	}
	return result
}

module.exports = chunk

//demo

//var list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//var newList = chunk(list, 5)
//console.log(newList) => [[1,2,3,4,5], [6,7,8,9]]