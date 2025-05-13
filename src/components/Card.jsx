import { Link } from "react-router-dom"

const Card = ({ blog }) => {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 ">
                    {console.log("Blog object:", blog)}
<img
  className="h-96 w-full object-cover rounded-t-lg cursor-pointer"
  src={`https://nodejs-ds6o.onrender.com/uploads/${blog.image}`}
  alt="useImage"
/>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {blog.title} </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {blog.description.length > 100 ? `${blog.description.slice(0, 80)}...` : blog.description} </p>
                    <Link to={`/blog/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Card
