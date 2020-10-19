import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function listReducer(state = initialState.lists, action) {
    switch (action.type) {
        case types.LOAD_LIST_SUCCESS:
            return [...state, ...action.lists];
        case types.UPDATE_ROW:
        case types.ADD_ROW:
            var newState = Object.assign([], state);
            let found = false;
            newState.forEach(function(value, item) {
                if (value['id'] == action.row.id) {
                    value['value'] = action.row.value;
                    found = true;
                }
            })
            if (!found) {
                newState.push(action.row)
            }
            return [...state, ...newState]

        default:
            return state;
    }
}