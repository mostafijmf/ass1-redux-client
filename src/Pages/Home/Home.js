import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_HISTORY } from '../../redux/actionType/actionType';
import loadBlogData from '../../redux/thunk/blogs/fetchBlog';
import BlogDetails from './BlogDetails';

const Home = () => {
    const [openBlog, setOpenBlog] = useState('');
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blogs);

    useEffect(() => {
        dispatch(loadBlogData());
    }, [dispatch]);

    return (<>
        <div className='xl:w-[1200px] w-[90%] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                {
                    blogs.map(({ _id, title, imgUrl, description }) => <div key={_id}
                        className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div>
                            <img className="rounded-t-lg w-full h-52" src={imgUrl} alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {description.slice(0, 350)}
                            </p>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: ADD_TO_HISTORY,
                                        payload: {
                                            _id, title, imgUrl, description
                                        }
                                    });
                                    setOpenBlog({ _id, title, imgUrl, description });
                                }}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                            >
                                Read more
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    )
                }

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

export default Home;