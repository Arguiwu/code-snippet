const assocIndexOf = require('./assocIndexOf')

class ListCache {
	/*
		创建 list
		@private
		@param {Array} [entries] 初始值
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
		清空对象
	*/
	clear() {
		this.__data__ = []
		this.size = 0
	}
	/*
		根据key删除某一项
		@params {string} key
		@returns {boolean} 返回true or false
	*/
	delete(key) {
		const data = this.__data__
		const index = assocIndexOf(data, key)

		if(index < 0) {
			return false
		}
		const lastIndex = data.length - 1
		if(index == lastIndex) {
			data.pop()
		}else {
			data.splice(index, 1)
		}
		--this.size
		return true
	}
	/*
		获取某一项value
		@param {string} key
		@returns {*}
	*/
	get(key) {
		const data = this.__data__
		const index = assocIndexOf(data, key)
		return index < 0 ? undefined : data[index][1]
	}
	/*
		判断是否有某一项
		@param {string} key
		@returns {boolean}
	*/
	has(key) {
		return assocIndexOf(this.__data__, key) > -1
	}
	/*
		设置值
		@param {string} key
		@param {*} value
		@returns {Object}
	*/
	set(key, value) {
		const data = this.__data__
		const index = assocIndexOf(data, key)

		if(index < 0) {
			data.push([key, value])
		}else {
			data[index][1] = value
		}
		return this
	}
}

module.exports = ListCache