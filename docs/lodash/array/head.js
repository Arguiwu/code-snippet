/*
	gets the first element of `array`
	@param {array} array the array to query
	@return {*} return the first element of `array`
	@example
	head([1,2,3])  // => 1
	head([])	   // => undefined
*/

function head(array) {
	return (array !== null && array.length)
		? array[0]
		: undefined
}

module.exports = head