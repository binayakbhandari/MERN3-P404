import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const Home = ()=>{
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async ()=>{
        const response = await axios.get("https://nodejs-ds6o.onrender.com/blog")
        setBlogs(response.data.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    return(
        <>

        <Navbar />
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto gap-8 my-8">
            {
                blogs.map(function(blog){
                    return(
                        <Card blog={blog} />
                    )
                })
            }
        </div>


        </>
    )
}

export default Home