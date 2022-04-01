import React, { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "./Posts";
import { Pages } from "./Pages";

export const CustomPagination = ()=>{


    const [data, setData] = useState([])  
    const [loading ,setLoading] = useState(false) 
    const [currentPage, setCurrentPage]= useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
   
    useEffect(()=>{

        const fetchData = async ()=>{
            setLoading(true)
            const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=10");
            setData(resp.data.results)
            setLoading(false)
        }

        fetchData();
       
    },[])

    
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage; 
    const currentPosts = data.slice(firstPost , lastPost)

    const changePages = (page)=>{
            setCurrentPage(page)
    }


    return(
        <div>   
            <Posts currentPosts={currentPosts}  ></Posts>
            <Pages totalposts={data.length}  postsPerPage={postsPerPage} loading = {loading} handlePages={changePages} ></Pages>
        </div>
    )



}