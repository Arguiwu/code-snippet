import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants'

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
	switch (action.type) {
		case DECREMENT_ENTHUSIASM:
			return {
				...state,
				enthusiasmLevel: state.enthusiasmLevel + 1
			}
		case INCREMENT_ENTHUSIASM:
			return {
				...state,
				enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
			}
		default:
	}
	return state
}
