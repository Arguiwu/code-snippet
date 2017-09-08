Array.prototype.unique = function() {
	this.sort()
	let re = [this[0]]
	for(let i = 0; i < this.length; i++) {
		if(this[i] !== re[re.length - 1]) {
			re.push(this[i])
		}
	}
	return re
}

// ES6方式 Set

const arr = [1, 2, 4, 2, 5, 6, 1, 8]
const arr2 = [ ...new Set(arr) ]