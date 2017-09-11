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

class MapCache {
	/*
		创建 mapcache
		@private
		@constructor
		@param {Array} [entries] [[1,2],[3,4]]
	*/
	constructor(entries) {
		let index = -1
		const length = entries === null ? 0 : entries.length
		this.clear()
		while(++index < length) {
			const entrie = entries[index]
			this.set(entrie[0], entrie[1])
		}
	}
	/*
		清空数据
	*/
	clear() {
		this.size = 0
		this._data_ = {
			'hash': new Hash,
			'map': new (Map || ListCache),
			'string': new Hash
		}
	}
	/*
		根据key移除一项
		@param {string} key
		@returns {boolean} 移除是否成功
	*/
	delete(key) {
		const result = getMapData(this, key)['delete'](key)
	}
}