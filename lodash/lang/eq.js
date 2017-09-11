/*
	@param {*} value 要比较的值
	@param {*} other 其他要比较的值
	@return {boolean} 返回 true or false
*/

function eq(value, other) {
	return value === other || (value !== value && other !== other)
}

module.exports = eq