export const addToState = (latitude, longitude) => ({
    type: 'SET_STATE',
    payload: [latitude, longitude]
})

export const setEircode = (eircode) => ({
    type: 'SET_EIRCODE',
    payload: eircode
})