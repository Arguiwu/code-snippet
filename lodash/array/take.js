const slice = require('./slice')

/*
	create a slice of `array` width `n` elements taken from the beginning
	@param {array} array the array to query
	@param {number} [n=1] the number of elements to take
	@return {array} return the slice of `array`
	@example
	take([1,2,3], 2)	=> [1,2]
	take([1,2,3,4], 10) => [1,2,3,4]
	take([1,2,3], 0)	=> []
*/

function take(array, n) {
	if(!(array !== null && array.length)) {
		return []
	}
	return slice(array, 0, n < 0 ? 0 : n)
}

module.exports = take
