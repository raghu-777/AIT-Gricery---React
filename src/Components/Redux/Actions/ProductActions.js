import { Action_Types } from "../Constants/Constants"


export const setProduct = (product) => {
    return {
        type: Action_Types.SET_PRODUCT,
        payload: product
    }
}

export const addToCart = (product) => {
    return {
        type: Action_Types.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: Action_Types.REMOVE_FROM_CART,
        payload: id
    }
}

export const incrementQuantity = (product) => {
    return {
        type: Action_Types.INCREMENT_QUANTITY,
        payload: product
    }
}

export const decrementQuantity = (product) => {
    return {
        type: Action_Types.DECREMENT_QUANTITY,
        payload: product
    }
}




