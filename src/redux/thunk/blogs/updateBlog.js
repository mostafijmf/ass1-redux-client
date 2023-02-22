import axios from "axios";
import { UPDATE_BLOG } from "../../actionType/actionType";

const updateBlog = ({ id, title, imgUrl, description }) => {
    return async (dispatch, getState) => {
        await axios.patch(`http://localhost:5000/blog/${id}`, {
            title, imgUrl, description
        }, {
            method: 'PATCH',
            headers: {
                'Authorization': localStorage.getItem('user')
            }
        })
            .then(res => {
                if (res.data.acknowledged) {
                    dispatch({
                        type: UPDATE_BLOG,
                        payload: res.data,
                    })
                }
            })
            .catch(err => { console.log(err); })
    }
};

export default updateBlog;