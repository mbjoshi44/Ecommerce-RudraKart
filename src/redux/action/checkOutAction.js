import { actionTypes } from "../constants/action-types";

export const checkOutOrder = (orderObj) => ({
    type: actionTypes.PLACE_ORDER,
    payload: orderObj
})