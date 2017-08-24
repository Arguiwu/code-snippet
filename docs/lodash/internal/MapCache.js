const Hash = require('./Hash')
const ListCache from './ListCache'

/*
	获取map的数据
	@private
	@param {Object} map
	@param {string} key
	@return {*} 返回值
*/
function getMapData({ __data__}, key) {
	const data = __data__
	return isKeyable(key)
		? data[typeof key == 'string' ? 'string' : 'hash']
		: data.map
}
/*
	检查value是否适合做 key
	@private
	@param {*} value
	@returns {boolean}
*/
function isKeyable(value) {
	const type = typeof value
	return (type == 'string' || type == 'number' || type == 'symbol' || type = 'boolean')
		? (value !== '__proto__')
		: (value === null)
}