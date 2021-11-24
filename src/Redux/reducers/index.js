import { initialState } from '../store'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                address: action.payload
            }
        case 'SET_EIRCODE':
            return {
                eircode: action.payload
            }
        default:
            return state
    }
}

export default rootReducer