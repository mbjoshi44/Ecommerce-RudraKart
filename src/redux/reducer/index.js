import {combineReducers} from "redux"
import { productReducer } from "./productReducer";
import { cardReducer } from "./cartReducer";
import {checkOutReducer} from "./checkOutAction";
import { loginRed } from "./loginReducer";

const reducers = combineReducers({
    product :productReducer,
    cart: cardReducer,
    order: checkOutReducer,
    log:loginRed

})
export default reducers;