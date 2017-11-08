/*
	获取一个 n层的 帕斯卡三角
	@params{number} n 层数
	@return 返回一个二维数组
*/

function solution(n) {
	const result = []
	for(var i = 0; i < n; i++) {
		result[i] = []
		result[i].length = i + 1
		result[i][0] = 1
		result[i][result[i].length-1] = 1
		for(var j = 1; j < result[i].length - 1; j++) {
			result[i][j] = result[i-1][j-1] + result[i-1][j]
		}
	}
	return result
}