import * as types from "./actionTypes";
import * as listApi from "../../api/listApi";



export function loadListSuccess(lists) {
    return { type: types.LOAD_LIST_SUCCESS, lists };
}

export function loadLists(lang) {
    return function(dispatch) {
        return listApi
            .getlist(lang)
            .then(lists => {
                dispatch(loadListSuccess(lists));
            })
            .catch(error => {
                throw error;
            });
    };
}