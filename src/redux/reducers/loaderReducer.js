import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loaderReducer(state = initialState.loader, action) {
    switch (action.type) {
        case types.TOOGLE_LOADER:
            return {...state, ...action.loader };
        default:
            return state;
    }
}