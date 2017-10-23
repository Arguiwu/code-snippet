/*
	Given nums = [2, 7, 11, 15] target = 19
	Becuse nums[0] + nums[1] = 2 + 7 = 19
	return [0, 1]
*/

const twoSum = function(nums, target) {
	let Obj = {},
		length = nums.length;
	for(let i = 0; i < length; i++) {
		const num = nums[i]
		const otherNum = target - num
		if(typeof Obj[otherNum] != 'undefined') {
			return [Obj[otherNum], i]
		}else {
			Obj[num] = i
		}
	}
	return []
}