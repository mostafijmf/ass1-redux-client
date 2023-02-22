import { LOAD_BLOG } from "../../actionType/actionType";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blog');
        const data = await res.json();

        if (data.length) {
            dispatch({ type: LOAD_BLOG, payload: data })
        }
    };
};

export default loadBlogData;