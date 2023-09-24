import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/posts"
 
 
const Tables =() =>{

    const [user , setUser] = useState('')
 const fetchUser =async (url) =>{
    try{
     const res =await fetch(url)
     const data =await res.json();
     if(data.length > 0){
        setUser(data)
     }
    }
    catch (e) {
         console.error(e)
    }

 }
    useEffect(() =>{
        fetchUser(API);
    } , [])
    return ( 
       

        <div className="   flex  justify-center items-center min-h-screen">
        <div class="  border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
       
            <table class="table-auto">
                <thead>
                    <tr>
                        <th class=" px-4 py-2 text-gray-600">
                         
                        </th>
                        <th class=" px-4 py-2 text-gray-600">
                          
                        </th>
                        <th class=" px-4 py-2 text-gray-600">
                          
                        </th>
                        

                    </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                            <tr key={index}>
                                <td class="border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.title}</td>
                                <td class="border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.author}</td>
                    


               )) }

</tr>

                </tbody>
            </table>
            </div>
            </div>
    )
}
export default Tables