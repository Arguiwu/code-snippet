const eq = require('../ang/eq.js')

/*
	判断数组中是否存在某一项
	@privte
	@param {Array} 
*/

function assocIndexOf(array, key) {
	let { length } = array
	while(length--) {
		if(eq(array[length][0], key)) {
			return length
		}
	}
	return -1
}
module.exports = assocIndexOf
