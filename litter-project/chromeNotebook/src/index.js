const KEY = 'myChromeNotebook'

const notepad = document.querySelector('.notepad')

notepad.addEventListener('input', e => {
	const value = notepad.value
	updateStore(KEY, value)
});

getStore(KEY)
setTime()

function getStore(storeKey) {
	chrome.storage.sync.get(storeKey, result => {
		if(result[storeKey]) {
			notepad.innerHTML = result[storeKey]
		}
	})
}

function updateStore(storeKey, data) {
	let obj = {}
	obj[storeKey] = data
	chrome.storage.sync.set(obj)
}

function setTime() {
	const weekMap = {
		1: '周一',
		2: '周二',
		3: '周三',
		4: '周四',
		5: '周五',
		6: '周六',
		7: '周日'
	}
	const now = new Date(),
		year = now.getFullYear(),
		month = now.getMonth() + 1,
		day = now.getDate(),
		week = now.getDay(),
		hour = now.getHours();
	let str = ''
	if(hour < 12) {
		str = `上午好`
	}else if(hour >= 12 && hour < 18) {
		str = `下午好`
	}else {
		str = `晚上好`
	}
	document.querySelector('.greeting').innerHTML = `${str} 今天 ${year}年${month}月${day}日 ${weekMap[week]}`
}
