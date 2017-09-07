/*
	@params {string} str 目标时间
	@return {string} 返回 目标时间跟当前时间的差值
	@example
	timeToChinese('2017-09-07 11:20:20')  => 几分钟前
*/
const timeToChinese = (str) => {
	const date = new Date(str)
	const time=new Date().getTime() - date.getTime()
	if(time < 0) {
		return '错了吧'
	}else if(time / 1000 < 60) {
		return '刚刚'
	}else if(time / 60000 < 60) {
		return parseInt(time / 60000) + '分钟前'
	}else if(time / 3600000 < 24) {
		return parseInt(time / 3600000) + '小时前'
	}else if(time / 86400000 < 31) {
		return parseInt(time / 86400000) + '天前'
	}else if(time / 2592000000 < 12) {
		return parseInt(time / 2592000000) + '月前'
	}else {
		return parseInt(time / 31536000000) + '年前'
	}
}


export default= {
	timeToChinese,
}