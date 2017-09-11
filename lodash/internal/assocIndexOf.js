const eq = require('../lang/eq.js')

/*
	查找数组中是否存在某一项的key是否存在
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
