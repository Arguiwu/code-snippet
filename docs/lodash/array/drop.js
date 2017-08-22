const slice = require('./slice.js')

/*
	返回从第N项开始到结束的新数组 N大于数组长度返回空数组
	@param {Array} array 目标数组
	@param {number} [n=1] 开始位置
	@returns {Array} 返回新的数组
*/

function drop(array, n=1) {
	const length = array === null ? 0 :array.length
	return length
		? slice(array, n < 0 ? 0 : n, length)
		: []
}

module.exports = drop

//demo

const a = [1,2,3,4];
const b = drop(a, 3);
console.log(b)