import {legacy_createStore as createStore} from "redux"
import  Reducers  from "./reducer/index"

const store = createStore(Reducers)
export default store;