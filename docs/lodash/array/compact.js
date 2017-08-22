/*
	创建一个新的数组 去掉目标数组中 值为false的项 如 'false', 'null',
	'0', '""', 'undefined', 'NaN'
	@param {Array} array 目标数组
	@param {Array} 返回新的数组
*/

function compact(array) {
	let resIndex = 0
	const result = []

	if(array == null) {
		return result
	}

	for(const value of array) {
		if(value) {
			result[resIndex++] = value
		}
	}
	return result
}

module.exports = compact

// demo
// var a = [1,2,0,false,NaN, undefined];

// var b = compact(a)
// console.log(b) => [1, 2]