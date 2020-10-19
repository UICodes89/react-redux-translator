import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function langReducer(state = initialState.langs, action) {
    switch (action.type) {
        case types.LOAD_LANGUAGE_SUCCESS:
            return [...state, ...action.langs];
        default:
            return state;
    }
}