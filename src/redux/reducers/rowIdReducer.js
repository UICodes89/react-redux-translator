import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function rowIdReducer(state = initialState.rowId, action) {
    switch (action.type) {
        case types.EDIT_ROW:
            return {...state, ...action.rowId };
        default:
            return state;
    }
}