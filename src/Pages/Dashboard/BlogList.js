import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBlog from '../../redux/thunk/blogs/deleteBlog';
import loadBlogData from '../../redux/thunk/blogs/fetchBlog';
import BlogDetails from '../Home/BlogDetails';
import EditBlog from './EditBlog';

const BlogList = () => {
    const [openBlog, setOpenBlog] = useState('');
    const [openEdit, setOpenEdit] = useState('');
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);

    useEffect(() => {
        dispatch(loadBlogData());
    }, [dispatch]);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to proceed?")) {
            dispatch(deleteBlog(id));
        } else {
            return
        }
    };

    return (<>
        <div>
            <div className="lg:w-[60rem] w-full mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Customize
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog, index) =>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='w-20 h-10' src={blog.imgUrl} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <h4 className='text-base font-medium'>
                                            {blog.title}
                                        </h4>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => setOpenBlog(blog)}
                                            class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-indigo-600 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                        >
                                            <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                View
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => setOpenEdit(blog)}
                                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            class="text-indigo-600 hover:text-indigo-700 duration-200"
                                        >
                                            <svg className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        {
            openEdit &&
            <EditBlog
                blog={openEdit}
                setOpenEdit={setOpenEdit}
            />
        }
        {
            openBlog &&
            <BlogDetails
                blog={openBlog}
                setOpenBlog={setOpenBlog}
            />
        }
    </>);
};

export default BlogList;