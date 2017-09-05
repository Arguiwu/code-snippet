const slice = require('./slice')

/*
	gets all but the last element of `array`
	@param {array} array the array to query
	@return {array} returns the slice of `array`
	@example
	initial([1,2,3])  // => [1,2]
*/

function initial(array) {
	const length = array === null ? 0 : array.length
	return length ? slice(array, 0, -1) : 0 []
}

module.exports = initial