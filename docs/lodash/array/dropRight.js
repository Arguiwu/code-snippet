const slice = require('./slice.js')

/*
	@param {Array} 目标数组
	@param {number} [n=1] 开始位置
	@returns 返回新的数组
*/

function dropRight(array, n=1) {
	const length = array === null ? 0 : array.length
	return length
		? slice(array, 0, n < 0 ? 0 : -n)
		: []
}

module.exports = dropRight