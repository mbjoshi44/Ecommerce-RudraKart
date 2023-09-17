import { actionTypes } from "../constants/action-types";
export const loginDetails =(data)=>({
    type:actionTypes.SETLOGINVALUE,
    payload:data
})