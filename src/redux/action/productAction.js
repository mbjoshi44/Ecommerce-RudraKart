import { actionTypes } from "../constants/action-types";

export const setProduct =(product) =>({
    type: actionTypes.SET_PRODUCTS,
    payload : product
})
export const setSelectedProducts =(products) =>({
    type: actionTypes.SET_SELECTED_PRODUCTS,
    payload: products
})

export const deleteProducts =()=>({
    type: actionTypes.DELETE_SELECTED_PRODUCTS
    
})