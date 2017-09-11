import {
	AsyncStorage,
} from 'react-native'

const LocalStorageManage = () => {
	this.bestScoreKey = 'bestScore'
	this.gameStateKey = 'gameState'
	this.storage = AsyncStorage
}

LocalStorageManage.prototype.getItem = (options) => {
	AsyncStorage.getItem(options.key, (err, result) => {
		if(err) {
			options.error(err)
		}else {
			options.success(result)
		}
	})
}

LocalStorageManage.prototype.setItem = (options) => {
	AsyncStorage.setItem(options.key, options.value, (err, result) => {
		if(err) {
			options.error(err)
		}else {
			options.success(result)
		}
	})
}

LocalStorageManage.prototype.removeItem = (options) => {
	AsyncStorage.removeItem(options.key, (err, result) => {
		if(err) {
			options.error(err)
		}else {
			options.success(result)
		}
	})
}
