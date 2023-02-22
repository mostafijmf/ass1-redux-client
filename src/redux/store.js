import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducer";

const rootReducer = combineReducers({
    blogs: blogReducer,
    // filter: "",
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
