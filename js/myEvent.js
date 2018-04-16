var Event = {
	on: function(eventName, callback) {
		if(typeof Event.handlers == 'undefined') {
			Event.handlers = {}
		}
		if(typeof Event.handlers[eventName] == 'undefined') {
			Event.handlers[eventName] = []
		}
		Event.handlers[eventName].push(callback)
	},
	emit: function(eventName) {
		var handler = Event.handlers[eventName]
		if(handler instanceof Array) {
			for(var i = 0; i < handler.length; i++) {
				handler[i](arguments[1])
			}
		}
	},
	removeHandler: function(eventName, handler) {
		var handlers = Event.handlers[eventName]
		if(handlers instanceof Array) {
			for(var i = 0; i < handlers.length; i++) {
				if(handlers[i] == handler) {
					break;
				}
			}
			handlers.splice(i, 1)
		}
	}
}


function a() {
	console.log('a')
}

function b() {
	console.log('b')
}

Event.on('a', a)
Event.on('b', b)
Event.on('c', a)
Event.on('c', b)

Event.removeHandler('b', b);

Event.emit('a')
Event.emit('b')
Event.emit('c')