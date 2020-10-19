import { handleResponse, handleError } from "./apiUtils";
let baseUrl = "http://localhost:5000/api/"


export function getlist(lang) {
    return fetch(baseUrl + lang, { referrerPolicy: 'same-origin' })
        .then(handleResponse)
        .catch(handleError);
}


export function getlangs() {
    return fetch(baseUrl + '/codes', { referrerPolicy: 'same-origin' })
        .then(handleResponse)
        .catch(handleError);
}



export function addUpdateRow(translate) {
    let URL = ''
    if (translate.options.method === "PUT") {
        URL = baseUrl + translate.language + '/' + translate.lang_id;
    } else {
        URL = baseUrl + translate.language;
    }
    return fetch(URL, translate.options)
        .then(handleResponse)
        .catch(handleError);
}