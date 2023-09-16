import locale from "./localeReducer";
import pageData from "./pageDataReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    locale,
    pageData
})

export default rootReducer;