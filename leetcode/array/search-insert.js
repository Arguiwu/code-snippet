/*
	从一个排序号的数组中查找某一个值 返回索引 如果不存在 返回能插入的索引 不能乱序
	@params{nums} 待测数组
	@params{num} 需要查找或插入的数字
	@return 返回索引
*/
function solution(nums, num) {
	const length = nums.length
	let low = 0, high = length
	while(low <= high) {
		const mid = parseInt(low + (high - low) / 2)
		if(nums[mid] == num) {
			return mid
		}else if(nums[mid] < num) {
			low = mid + 1
		}else {
			high = mid - 1
		}
	}

	return low
}