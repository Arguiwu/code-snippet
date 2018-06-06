const notp = require('./index'),
	  t2 = require('thirty-two'),
	  K = 'wxg1sorryw2xgso2rry',
	  b32 = t2.encode(K)

console.log('http://qrcode.kaywa.com/img.php?s=8&d=' + encodeURIComponent('otpauth://totp/wxgso2rry?secret=' + b32))

var date = new Date()
var s = date.getSeconds()
var diffTime = 30 - ( s % 30)

//verify()
getCode()
var firstInter = setInterval(function() {
	getCode();
	clearInterval(firstInter);
	setInterval(function() {
		getCode();
	}, 30000);
}, diffTime * 1000);

function verify() {
	ask('请输入验证码', function(code) {
		if(notp.totp.verify(code, K, {})) {
			console.log('成功!!!');
		}
		console.log(notp.totp.verify(code, K, {}));
		verify();
	});
}

function getCode() {
	const time = notp.totp.gen(K, {})
	console.log('当前验证码是：=>' + time )
}

function ask(question, callback) {
	var stdin = process.stdin, stdout = process.stdout;

	stdin.resume();
	stdout.write(question + ": ");

	stdin.once('data', function(data) {
		data = data.toString().trim();
		callback(data);
	});
}