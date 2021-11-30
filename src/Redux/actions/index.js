export const addToState = (address) => ({
    type: 'SET_STATE',
    payload: address
})

export const setEircode = (eircode) => ({
    type: 'SET_EIRCODE',
    payload: eircode
})

export const setRef = (ref) => ({
    type: 'SET_REF',
    payload: ref
})