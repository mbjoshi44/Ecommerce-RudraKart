import { actionTypes } from "../constants/action-types";

export const setCartData =(product) =>({
    type : actionTypes.SET_CART_DATA,
    payload : product
})  

export const removeCartData =(productId) =>({
    type : actionTypes.REMOVE_CART_DATA,
    payload : productId
})