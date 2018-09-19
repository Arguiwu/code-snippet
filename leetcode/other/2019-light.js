/*一共有2019盏灯，分别编号1，2，3，4，... 2019，先把编号为1的倍数的灯开关按一遍，然后把编号为2的倍数的灯开关按一遍，... 最后把编号为2019的倍数的灯开关按一遍，问最后还有那些灯亮着。
*/

function getNum(num){
	const result = [];
	for(let i = 0 ; i <= num; i++) {
		if(num % i === 0) {
			result.push(i)
		}
	}
	return result
}

const results = []

for(let i = 1; i <= 2019; i++) {
	const result = getNum(i).length;
	if(result % 2 === 1) {
		results.push(i);
	}
}

console.log(results);