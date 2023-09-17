import { actionTypes } from "../constants/action-types";

const intialData ={
    orderDetails :{}
  }
export const checkOutReducer =(state = intialData,action)=>{
    const{type ,payload} = action;
  
    switch(type){
        case actionTypes.PLACE_ORDER:
            const temp = {
                ...payload,
                orderid:Math.floor(Math.random()*1000000),
            }
        return {...state,  orderDetails:temp}
         default :
            return state
    }
}