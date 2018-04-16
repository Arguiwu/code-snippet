
// ES6 代理Proxy
const wrap = obj => {
	return new Proxy(obj, {
		get(target, propKey) {
			console.log(`reading properKey "${propKey}"`);
			return target[propKey]
		}
	})
}

const object = { message: 'Hello world' };
const wrapped = wrap(object);
console.log(wrapped.abcd)

function getNum(num) {
	return Math.floor(Math.random()*(num+1));
}