import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        title : "",
        subtitle : "",
        description : "",
        image : ""
    })

    const handleChange = (e)=>{
        // const name = e.target.name 
        // const value = e.target.value 
        const {name, value} = e.target 
        setData({
            ...data,
            [name] : name === "image" ? e.target.files[0] : value
         })
    }

    console.log(data)

    const creatBlog = async (e)=>{
        e.preventDefault()

        const response = await axios.post("http://localhost:3000/blog", data, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })

        if(response.status === 200){
            console.log("Form Submitted !!!")
            navigate("/")
        } else {
            console.log("Something went wrong !")
        }
    }



    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Blog</h2>
                    <form onSubmit={creatBlog}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Title </label>
                                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type blog title" onChange={handleChange} required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="subtitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Subtitle </label>
                                <input type="text" name="subtitle" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type blog subtitle"     onChange={handleChange} required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Image </label>
                                <input type="file" name="image" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 cursor-pointer" onChange={handleChange} required="" />
                            </div>

                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" name="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange} placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-gray-700 cursor-pointer text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Create Blog
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Form