import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UploadBlog = () => {

    const handleUpload = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const imgUrl = e.target.img.value;
        const description = e.target.description.value;

        // console.log({ title, imgUrl, description });
        await axios.post('http://localhost:5000/blog', {
            title, imgUrl, description
        }, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('user')
            }
        })
            .then(res => {
                if (res.data.acknowledged){
                    toast.success('Successfully uploaded!');
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                    toast.error(err?.response?.data?.error)
                }
            })
    };

    return (
        <div className='flex items-center justify-center'>
            <form
                onSubmit={handleUpload}
                className='sm:w-[500px] w-full mt-10 shadow-lg p-10 rounded-md'
            >
                <h1 className='text-4xl font-medium text-indigo-600 mb-10'>
                    Write a blog
                </h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        required type="text"
                        name="title" id="title"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="title"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Blog title
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        required type="text"
                        name="img" id="img"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="img"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Image URL
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                        for="message"
                    >
                        Description
                    </label>
                    <textarea
                        required
                        id="description" rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Leave a blog..."
                    ></textarea>

                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                    Upload
                </button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UploadBlog;