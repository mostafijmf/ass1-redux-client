import React from 'react';

const BlogDetails = ({ blog, setOpenBlog }) => {
    const { imgUrl, description, title } = blog
    return (
        <div className='fixed inset-0 overflow-auto z-50 bg-white pt-5 pb-10 grid place-items-center'>
            <button
                onClick={() => setOpenBlog('')}
                className='fixed top-8 left-8 hover:bg-gray-100 duration-200  p-1.5 rounded-full'
            >
                <svg className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='md:w-[40rem] w-11/12 bg-white rounded-lg shadow-lg'>
                <div>
                    <img className="rounded-t-lg w-full h-96" src={imgUrl} alt="" />
                </div>
                <div className="p-10">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;