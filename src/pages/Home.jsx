import { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const Home = ()=>{
    const fetchBlogs = async ()=>{
        const response = await axios.get("http://localhost:300/blog")
    }

    useEffect(()=>{
        fetchBlogs()
    },[])
    return(
        <>

        <Navbar />
        <div className="flex flex-wrap justify-center items-center gap-8 my-8">
        <Card />
        <Card />
        <Card />
        <Card />

        </div>


        </>
    )
}

export default Home