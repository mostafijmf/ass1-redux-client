import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BlogDetails from '../Home/BlogDetails';

const History = () => {
    const [openBlog, setOpenBlog] = useState('');
    const history = useSelector((state) => state.blogs.history);

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
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((item, index) =>
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img className='w-20 h-10' src={item.imgUrl} alt="" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <h4 className='text-base font-medium'>
                                            {item.title}
                                        </h4>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.description.slice(0, 120)} . . .
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => setOpenBlog(item)}
                                            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-indigo-600 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                        >
                                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                View
                                            </span>
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
            openBlog &&
            <BlogDetails
                blog={openBlog}
                setOpenBlog={setOpenBlog}
            />
        }
    </>);
};

export default History;