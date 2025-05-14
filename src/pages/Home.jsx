import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const Home = ()=>{
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async ()=>{
        const response = await axios.get("http://localhost:3000/blog")
        setBlogs(response.data.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    return(
        <>

        <Navbar />
      {/* <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap justify-center items-center gap-8 my-8"> */}
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex flex-wrap justify-center items-center gap-8 my-8">
          {blogs.map(function (blog) {
            return <Card key={blog._id} blog={blog} />;
          })}
        </div>
      </div>


        </>
    )
}

export default Home