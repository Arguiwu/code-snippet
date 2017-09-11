const baseWhile = require('../internal/baseWhile')

/*
	从右侧起 返回数组中不符合迭代器内容的元素？ 这不就是 filter?
	@param {array} array 目标数组
	@param {Function} predicate 迭代器
	@returns {array} 返回新数组
*/

function dropRightWhile(array, predicate) {
	return (array !== null && array.length)
		? baseWhile(array, predicate, true, true)
		: []
}

// demo
const demo1 = [0,1,2,3,4];
var value1 = dropRightWhile(demo1, function(n) {
	return n > 1
})
console.log(value1)

module.exports = dropRightWhile