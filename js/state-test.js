const machine = {
	currentState: 'login form',
	states: {
		'login form': {
			submit: 'loading'
		},
		'loading': {
			success: 'profile',
			failure: 'error'
		},
		'profile': {
			viewProfile: 'profile',
			logout: 'login form'
		},
		'error': {
			tryAgain: 'loading'
		}
	}
}

const input = function(name) {
	const state = machine.currentState
	if(machine.states[state][name]) {
		machine.currentState = machine.states[state][name]
	}
	console.log(`${ state } + ${ name } --> ${ machine.currentState }`)
}

input('submit')