import { ADD_TO_HISTORY, LOAD_BLOG, REMOVE_BLOG, UPDATE_BLOG } from "../actionType/actionType";

const initialState = {
    history: [],
    blogs: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };

        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };

        case REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(f => f._id !== action.payload),
            };

        case UPDATE_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };

        default:
            return state;
    }
};

export default blogReducer;