import * as types from "./actionTypes";
import * as listApi from "../../api/listApi";
import * as listActions from "./listActions"



export function loadLangSuccess(langs) {
    return { type: types.LOAD_LANGUAGE_SUCCESS, langs };
}

export function loadLangs() {
    return function(dispatch) {
        return listApi
            .getlangs()
            .then(langs => {
                dispatch(loadLangSuccess(langs));
                if (langs.length) {
                    langs.forEach(item => {
                        if (item['language'] !== null) {
                            listApi
                                .getlist(item['language'])
                                .then(lists => {
                                    lists.forEach((row) => {
                                        row['language'] = item['language']
                                    });
                                    dispatch(listActions.loadListSuccess(lists));
                                })
                                .catch(error => {
                                    throw error;
                                });
                        }
                    });
                }
            })
            .catch(error => {
                throw error;
            });
    };
}