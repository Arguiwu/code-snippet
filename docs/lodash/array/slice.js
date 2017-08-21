/*
	从array中提取片段 从 start开始到 end结束(不包括end)生成新的数组 原数组不变
	@param {Array} 		array 需要的数组
	@param {number}		[start=0] 开始位置
	@param {number}		[end=array.length] 结束的位置
	@returns {Array}	返回处理好的数组
*/

function slice(array, start, end) {
	let length = array === null ? 0 : array.length
	if(!length) {
		return []	//数组不存在直接返回0
	}
	start = start == null ? 0 : start
	end = end === undefined ? length : end

	if(start < 0) {
		start = -start > length ? 0 : (length + start)
	}
	end = end > length ? length : end
	if(end < 0) {
		end += length
	}
	length = start > end ? 0 : ((end - start) >>> 0)
	start >>>= 0

	let index = -1
	const result = new Array(length)
	while(++index < length) {
		result[index] = array[index + start]
	}
	return result
}

module.exports = slice

// demo
//var list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//var newList = slice(list, 2, 6)
//console.log(list)	// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(newList)	// => [3, 4, 5, 6]