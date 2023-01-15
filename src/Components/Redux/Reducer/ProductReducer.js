import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Action_Types } from "../Constants/Constants";


const initialState = {
    productData: [],
    cartItems: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action_Types.SET_PRODUCT:
            return { ...state, productData: action.payload }

        case Action_Types.ADD_TO_CART:
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                toast.info(`Item ${itemInCart.Name} already added`, {
                    position: 'bottom-left'
                })
                return { cartItems: [...state.cartItems] }
            } else {
                action.payload.quantity = 1
                return {
                    cartItems: [...state.cartItems, action.payload]
                }
            }


        case Action_Types.INCREMENT_QUANTITY:
            const increaseQuantity = state.cartItems.find((item) => item.id === action.payload.id);
            if (increaseQuantity) {
                increaseQuantity.quantity++;
                return { cartItems: [...state.cartItems] }
            } else {
                return { cartItems: [...state.cartItems] }
            }


        case Action_Types.DECREMENT_QUANTITY:
            const decreaseQuantity = state.cartItems.find((item) => item.id === action.payload.id);
            if (decreaseQuantity.quantity === 1) {
                decreaseQuantity.quantity = 1
                return { cartItems: [...state.cartItems] }
            } else {
                decreaseQuantity.quantity--;
                return { cartItems: [...state.cartItems] }
            }


        case Action_Types.REMOVE_FROM_CART:
            const filterData = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
            return {
                ...state, cartItems: filterData
            }

        default: return state
    }
}