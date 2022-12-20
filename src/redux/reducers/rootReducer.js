import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    blogs: blogsReducer,
    filter: filterReducer

})
export default rootReducer;