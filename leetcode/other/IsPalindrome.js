/*
	判断一个数字是否是回文
	@param {number} x
	@return {boolean}
*/


var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }
    x = Math.abs(x)
    if(x === Number(String(x).split('').reverse().join(''))) {
        return true
    }
    return false
};

var isPalindrome = function(x) {
	if(x < 0 || (x % 10 == 0 && x != 0)) {
		return false
	}
	let revertedNumber = 0
	while( x > revertedNumber) {
		revertedNumber = revertedNumber * 10 + x % 10
		x /= 10
	}
	return x == revertedNumber || x == revertedNumber / 10
}