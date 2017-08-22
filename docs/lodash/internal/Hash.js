const HASH_UNDEFINED = '_lodash_hash_undefined_'

class Hash {
	/*
		创建一个hash对象
		@private
		@constructor
		@param {Array} [entries] 要缓存的键值对
	*/
	constructor(entries) {
		let index = -1
		const length = entries == null ? 0 : entries.length

		this.clear()
		while(++index < length) {
			const entry = entries[index]
			this.set(entry[0], entry[1])
		}
	}
	/*
		移除键值对
		@memberOf Hash
	*/
	clear() {
		this.__data__ = Object.create(null)
		this.size = 0
	}
	/*
		根据 key 删除一对键值
		@param {object} Hash 
		@param {string} key
		@returns {boolean} return true or false
	*/
	delete(key) {
		const result = this.has(key) && delete this.__data__[key]
		this.size -= result ? 1 : 0
		return result
	}
	/*
		根据key获取value
		@param {string} key
		@return {*} 返回值
	*/
	get(key) {
		const data = this.__data__
		const result = data[key]
		return result === HASH_UNDEFINED ? undefined : result
	}
	/*
		检查Hash中是否存在某个key
		@param {string} key
		@returns {boolean}
	*/
	has(key) {
		const data = this.__data__
		return data[key] !== undefined
	}
	/*
		设置键值对
		@params {string} key
		@params {*} value
		@returns 返回Hash本身
	*/
	set(key, value) {
		const data = this.__data__
		this.size += this.has(key) ? 0 : 1
		data[key] = value === undefined ? HASH_UNDEFINED : value
		return this
	}
}

module.exports = Hash