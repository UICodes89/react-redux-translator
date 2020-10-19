import { combineReducers } from "redux";
import lists from "./listReducer";
import loader from "./loaderReducer";
import langs from "./langReducer"
import rowId from "./rowIdReducer"

const rootReducer = combineReducers({
    lists,
    langs,
    rowId,
    loader
});

export default rootReducer;