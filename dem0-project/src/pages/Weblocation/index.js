import React from "react";
import { Link } from "react-router-dom";

const  Weblocation =() =>{
return (

    <div class = "">
       <div class = "flex m-6">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>
       <h2>Task</h2>
       </div>
       <div class  = "flex">

       <div class = "flex bg-black w-60 p-4 text-white rounded-e-xl">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

  <h2 class = "font-bold cursor-pointer   ">Location</h2>
</div>

<div  >
<h1 class = " font-bold text-lg ml-24">+ Check In</h1>
</div>

</div>
<div>
  <h2 class = " ml-80 font-bold text-lg">
    Current location 
  </h2>
</div>
<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Pustegränd, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>

<div>
  <h2 class = " ml-80 font-bold text-lg mt-2">
    Previous Location
  </h2>
</div>
<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Halsingegätan, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>

<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Pustegränd, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>

<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Långa Gatan, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>


<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Djurgården, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>


<div class= "ml-80 ">
  <div class  = "flex mt-4">
  <img src = "/images/red.png" alt = "window"  class = "w-5 h-6 "/>
  <h2 class = "  text-lg font-semibold ml-2">Svartensgatan, Stockholm, SE</h2>
  </div>
  <p class  = " text-gray-400 mt-2 text-sm font-bold ml-6">59.3293° N, 18.0686° E</p>
</div>

<div class = " flex ml-9">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

            <h2 class = " font-bold cursor-pointer"> <Link  to ={"/weblogin"}>Log Out</Link></h2>
            
          </div>

</div>


      
    


          

)
}
export default Weblocation;