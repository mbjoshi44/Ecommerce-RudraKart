import { actionTypes } from "../constants/action-types";
const initialState ={
  cartList : []
}

export const cardReducer =(state = initialState, action) =>{
    const {type,payload} = action

    switch(type){
        case actionTypes.SET_CART_DATA:
            const temp = [...state.cartList, payload]
            return {...state, cartList:temp};
            case actionTypes.REMOVE_CART_DATA:
             const updatedItems = state.cartList.filter(item => item.id !== action.payload);
           return {
             ...state,
             cartList: updatedItems,
           }
        default:
            return state
    }
}