import { actionTypes } from "../constants/action-types";

const loginData ={
    loginData : false
}
export const loginRed =(state = loginData,action)=>{
    const{type,payload} = action
    switch(type){
        case actionTypes.SETLOGINVALUE:
            return{
                ...state , loginData:payload
            }
        default:
            return state
    }
}