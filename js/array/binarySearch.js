/*
	@param {array} list 查询的数组 需排序
	@param {*} value 需要查询的值
	@return 返回值的索引 无值 返回-1
*/
function binarySearch(list, value) {
	let start = 0,
		stop = list.length - 1
		middle = Math.floor((start + stop) / 2)

	while(list[middle] !== value && start < stop) {
		if(value < list[middle]) {
			stop = middle - 1
		}else {
			start = middle + 1
		}
		middle = Math.floor((start + stop) / 2)
	}
	return (list[middle] !== value) ? -1 : middle
}