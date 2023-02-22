import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import updateBlog from '../../redux/thunk/blogs/updateBlog';

const EditBlog = ({ blog, setOpenEdit }) => {
    const dispatch = useDispatch();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const imgUrl = e.target.img.value;
        const description = e.target.description.value;

        dispatch(updateBlog({ id: blog._id, title, imgUrl, description }));
        setOpenEdit('')
    };
    return (
        <div className='fixed inset-0 overflow-auto pt-5 pb-10 bg-white z-50 flex items-center justify-center'>
            <button
                onClick={() => setOpenEdit('')}
                className='fixed top-8 left-8 hover:bg-gray-100 duration-200  p-1.5 rounded-full'
            >
                <svg className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <form
                onSubmit={handleUpdate}
                className='sm:w-[500px] w-full mt-10 shadow-lg p-10 rounded-md'
            >
                <h1 className='text-4xl font-medium text-indigo-600 mb-10'>
                    Write a blog
                </h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        required type="text"
                        defaultValue={blog.title}
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
                        defaultValue={blog.imgUrl}
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
                        defaultValue={blog.description}
                        id="description" rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="Leave a blog..."
                    ></textarea>

                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                    Update
                </button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default EditBlog;