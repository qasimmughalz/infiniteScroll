import React, { useState } from "react";


export const Pages = ({totalposts, postsPerPage , loading , handlePages})=>{

    if(loading){
        return <h2>Loading</h2>
    }


   const numbers = []

    for(let i=0 ; i<= Math.ceil(totalposts / postsPerPage);i++){
        console.log(i)
        numbers.push(i)
    }

    console.log(numbers)
    return  <ul style={{display:"flex"}}>
               { 
               numbers.map((pages)=> {
                    return <li><a href="!#" onClick={ ()=>  handlePages(pages)}  >{pages}</a> </li>
                 })
                }
            </ul>


}