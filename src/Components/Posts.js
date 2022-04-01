import React from "react";



export const Posts = ({currentPosts})=>{


    return(
        <ul>
            {currentPosts.map((data,index)=> {
                return <li key={index} > {data.name} </li>
            }) } 
        </ul>
    )


} 