const slice = require('../array/slice')

/*
	dropWhile和takeWhile的基础方法
	@private
	@param {array} array 要查询的数组
	@param {Function} predicate 迭代函数
	@param {boolean} isDrop 是否删除元素
	@param {boolean} fromRight 指定从右到左迭代
	@returns {array} 返回新的数组
*/

function baseWhile(array, predicate, isDrop, fromRight) {
	const { length } = array
	let index = fromRight ? length : -1

	while((fromRight ? index-- : ++index < length) &&
		predicate(array[index], index, array)) {}
	return isDrop
		? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
		: slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

module.exports = baseWhile