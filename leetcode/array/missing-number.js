/*
	从0到N之间 取出m个数  找出漏掉的那个
	example: [0,1,2,3,5,6,7] => 4
	@params{nums} 数列
	@return 返回漏掉的数值
*/

function soluTion(nums) {
	let x = 0
	// 第一次循环因为要开0开始 而i最终要等于数组的长度值
	for(var i = 0; i <= nums.length; i++) {
		x ^= i
	}
	console.log(x)
	for(var j = 0; j < nums.length; j++) {
		const item = nums[j]
		x ^= item
	}
	return x
}