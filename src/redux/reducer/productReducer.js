import { actionTypes } from "../constants/action-types";
const initialState ={
    listProduct:[],
    selectedProduct:{
        title:'',
        image:'',
        catagory:'',
        price:'',
        rating:{},
        description:''
    }
}
export const productReducer=(state= initialState,action)=>{
    const{type , payload}=action
    switch(type){
    case actionTypes.SET_PRODUCTS:
        return{
            ...state , listProduct:payload
        }

    case actionTypes.SET_SELECTED_PRODUCTS:
        return{
            ...state, selectedProduct:payload 
        }
    case actionTypes.DELETE_SELECTED_PRODUCTS:
        return{
            ...state, selectedProduct: initialState.selectedProduct
        }
    
    default:
        return state
}
}