const slice = require('./slice')

/*
	create a slice of `array` width `n` elements taken from the end
	@param {array} the array to query
	@param {number} {n=1} the number of elements to take
	@param {array} return the slice of `array`
	@example
	takeRight([1,2,3])		=> [3]
	takeRight([1,2,3], 2) 	=> [2,3] 
*/

function takeRight(array, n = 1) {
	const length = array === null ? 0 : array.length
	if(!length) {
		return []
	}
	n = length - n
	return slice(array, n < 0 ? 0 : n, length)
}

module.exports = takeRight
