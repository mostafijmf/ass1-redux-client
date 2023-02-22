import axios from "axios";
import { REMOVE_BLOG } from "../../actionType/actionType";

const deleteBlog = (id) => {
    return async (dispatch, getState) => {
        await axios.delete(`http://localhost:5000/blog/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    dispatch({
                        type: REMOVE_BLOG,
                        payload: id,
                    })
                }
            })
            .catch(err => { });
    }
};

export default deleteBlog;