import * as types from "./actionTypes";

import * as listApi from "../../api/listApi";


export function changeRowIdSuccess(rowId) {
    return { type: types.EDIT_ROW, rowId };
}
export function toggleLoader(loader) {
    return { type: types.TOOGLE_LOADER, loader };
}

export function rowUpdateSuccess(row) {
    return { type: types.UPDATE_ROW, row };
}

export function changeId(rowId) {
    return function(dispatch) {
        return dispatch(changeRowIdSuccess(rowId));
    };
}


export function updateRow(translate) {
    return function(dispatch) {
        return listApi
            .addUpdateRow(translate)
            .then(row => {
                dispatch(rowUpdateSuccess(row));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function addRow(translate) {
    return function(dispatch) {
        return listApi
            .addUpdateRow(translate)
            .then(row => {
                row['language'] = translate.language;
                dispatch(rowUpdateSuccess(row));
            })
            .catch(error => {
                throw error;
            });
    };
}