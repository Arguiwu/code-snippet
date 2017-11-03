/*
	移除指定value项  返回新的数组长度 不能新建另一数组
*/

function Solution(arr, value) {
	var i = 0,
		j = 0;
	for(i = 0; i < arr.length; i ++) {
		if(arr[i] === value) {
			continue
		}
		arr[j] = arr[i]
		j++
	}
	return arr
}