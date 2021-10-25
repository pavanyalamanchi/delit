import { initialState } from '../store'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                latitude: action.payload[0],
                longitude: action.payload[1],
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