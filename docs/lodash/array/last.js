/*
	gets the last element of `aray`
	@param {array} the array to query
	@return {*} return the last element of `array`
	@example
	last([1,2,3])	=> 3
*/

function last(array) {
	const length = array === null ? 0 : array.length
	return length ? array[length - 1] : undefined
}

module.exports = last