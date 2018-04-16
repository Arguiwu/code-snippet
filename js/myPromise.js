class MyPromise {
	constructor(executor) {
		if(typeof executor !== 'function') {
			throw new Error('executor must be a function')
		}
		this.$state = 'PENDING'
		this.$chaine = []

		const resolve = res => {
			if(this.$state !== 'PENDING') {
				return
			}
			this.$state = 'FULFILLED';
			this.$internalValue = res;
			for(const { onFulfilled } of this.$chained) {
				onFulfilled(res)
			}
		}
		const reject = err => {
			if(this.$state !== 'PENDING') {
				return
			}
			this.$state = 'REJECTED';
			this.$internalValue = err;
			for(const { onRejected } of this.$chained) {
				onRejected(res)
			}
		}
		try {
			executor(resolve, reject)
		}catch(err) {
			reject(err)
		}
	}
	then(onFulfilled, onRejected) {
		if (this.$state === 'FULFILLED') {
			onFulfilled(this.$internalValue);
		} else if (this.$state === 'REJECTED') {
			onRejected(this.$internalValue);
		} else {
			this.$chained.push({ onFulfilled, onRejected });
		}
	}
}