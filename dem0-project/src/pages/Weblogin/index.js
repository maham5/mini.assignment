import React from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../../components/Button";
import WebTask from "../Webtask";


const WebLogin = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data ", event)
  }
    return (
      <div class = "inline-flex justify-center items-center w-full min-h-screen  " >    
  <form onSubmit={onSubmit} >
<h3 className=" text-center text-3xl mb-5 font-bold">Log In</h3>
  <div class=" mb-6">
   
    <input type="email"
     id="email" 
     class="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl
      focus:ring-blue-500 focus:border-blue-500 block  px-12 py-2 dark:bg-gray-700
       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
        dark:focus:border-blue-500" 
        placeholder="Email" 
        required/>
  </div>

  <div class=" mb-6">
  
   <input type="password"
    id="password" 
    

    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl
     focus:ring-blue-500 focus:border-blue-500 block  px-12 py-2 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
       dark:focus:border-blue-500" required/>
     
       
       
 </div>
 

 < Buttons
          type="button"
          size = "medium"
         variant = "secondary"
          className="w-full cursor-pointer bg-black rounded-xl px-10 py-2"
          >
            <Link  to ={"/webtask"}>Login</Link>
            
             
             
            </ Buttons>

          
          
</form>
</div>


    );
}
export default WebLogin;