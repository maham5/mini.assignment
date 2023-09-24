import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Buttons } from '../../components/Button';
import { Input1 } from '../../components/input';



const WebTask = () => {
    const [isTaskopen, setisTaskopen] = useState(false)
    const [isnewtask ,setisnewTask] = useState(false)
    const handClick = (e)=>{
        e.preventDefault();
        console.log(e)
    }


    return (




        <div >

            <div class=" flex mt-9">

                <div class="flex  mb-4  bg-black w-60 p-3 text-white rounded-e-xl ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <h2 class="font-bold cursor-pointer   ">Task</h2>
                </div>
                <div >
                    <h3 class="cursor-pointer font-bold   text-center ml-32 mt-6 "> <button onClick = { ( ) => setisnewTask(true)}>+ Add new Task</button></h3>

                </div>



            </div>


            <div class="flex">
                <div class="flex hover:bg-black hover : w-60 p-3 focus:bg-black focus:ring-black-2 hover:text-white rounded-e-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <h2 class="font-bold cursor-pointer  "><Link to={"/weblocation"}>Location</Link></h2>


                </div>
                <div>
                    <h2 class="font-bold    text-gray-600  ml-32  ">Incomplete</h2>
                </div>
            </div>




            <div class="ml-80">
                <div class="flex  p-2 ">
                    <div class="flex items-center h-5 ml-9">
                        <input id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="ml-2 text-sm">
                    
                        
                        <label
                         
                            for="helper-checkbox"
                            
                            
                            class="font-medium text-gray-900 dark:text-gray-300  "><button onClick = { ( ) => setisTaskopen(true)}>Submitt my resume</button> </label>
                             

                        <p id="helper-checkbox-text" class="text-xs font-bold text-gray-400 dark:text-gray-300">⏰ Today, 17.00</p>

                    </div>
                </div>
                <div class=" flex   p-2">
                    <div class="flex items-center h-5 ml-9">
                        <input id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="ml-2 text-sm">
                        <label
                            for="helper-checkbox"
                            class="font-medium text-gray-900 dark:text-gray-300">Complete the test</label>

                        <p id="helper-checkbox-text" class="text-xs font-bold text-gray-400 dark:text-gray-300">⏰ Tomorrow, 10.00</p>

                    </div>
                </div>
                <div class=" flex   p-2 ">
                    <div class="flex items-center h-5 ml-9">
                        <input id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="ml-2 text-sm">
                        <label
                            for="helper-checkbox"
                            class="font-medium text-gray-900 dark:text-gray-300">Meeting with Jack</label>

                        <p id="helper-checkbox-text" class="text-xs font-bold text-gray-400 dark:text-gray-300 ">⏰ 24 Feb, 11.00</p>

                    </div>
                </div>
                <div class=" flex  ">
                    <div class="flex items-center h-3 ml-11">
                        <input id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class=" text-sm ml-2">
                        <label
                            for="helper-checkbox"
                            class="font-medium text-gray-900 dark:text-gray-300 ">Buy a choclate for Mom</label>

                        <p id="helper-checkbox-text" class="text-xs font-bold text-gray-400 dark:text-gray-300">⏰ 24 Feb, 18.00</p>

                    </div>
                </div>
                <div class=" flex   p-2">
                    <div class="flex items-center h-5 ml-9 ">
                        <input id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="ml-2 text-sm">
                        <label
                            for="helper-checkbox"
                            class="font-medium text-gray-900 dark:text-gray-300">Facetime with Dad</label>

                        <p id="helper-checkbox-text" class="text-xs font-bold text-gray-400 dark:text-gray-300">⏰ 24 Feb, 18.00 </p>

                    </div>
                </div>
            </div>


            <div class="ml-80">

                <h2 class="font-bold     text-gray-600  ml-9">Complete</h2>
                <div class="ml-10">
                    <div class=" flex pt-4 ml-0">
                        <div class="flex items-center h-5 ">
                            <input id="helper-checkbox"
                                aria-describedby="helper-checkbox-text"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
         focus:ring-blue-500 dark:focus:ring-blue-600 items-center
          dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="ml-2 text-sm">
                            <label
                                for="helper-checkbox"
                                class="font-medium text-slate-400 dark:text-slate-300">Respond to Jande Email</label>


                        </div>
                    </div>

                    <div class=" flex   pt-4 ">
                        <div class="flex items-center h-5 ">
                            <input id="helper-checkbox"
                                aria-describedby="helper-checkbox-text"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="ml-2 text-sm">
                            <label
                                for="helper-checkbox"
                                class="font-medium text-slate-400 dark:text-slate-300">Reschdule weekly meeting</label>


                        </div>
                    </div>

                    <div class=" flex   pt-4 ">
                        <div class="flex items-center h-5  ">
                            <input id="helper-checkbox"
                                aria-describedby="helper-checkbox-text"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="ml-2 text-sm">
                            <label
                                for="helper-checkbox"
                                class="font-medium text-slate-400 dark:text-slate-300 ">Service my bike</label>


                        </div>
                    </div>

                    <div class=" flex  pt-4 ">
                        <div class="flex items-center h-5 ">
                            <input id="helper-checkbox"
                                aria-describedby="helper-checkbox-text"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="ml-2 text-sm">
                            <label
                                for="helper-checkbox"
                                class="font-medium text-slate-400 dark:text-slate-300">Recheck the agreemen document</label>


                        </div>
                    </div>

                    <div class=" flex   pt-4 ">
                        <div class="flex items-center h-5 ">
                            <input id="helper-checkbox"
                                aria-describedby="helper-checkbox-text"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
          focus:ring-blue-500 dark:focus:ring-blue-600 items-center
           dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div class="ml-2 text-sm">
                            <label
                                for="helper-checkbox"
                                class="font-medium text-slate-400 dark:text-slate-300 ">Check the latest on community</label>




                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex m-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>

                <h2 class=" font-bold cursor-pointer"> <Link to={"/weblogin"}>Log Out</Link></h2>

            </div>

            <CreateTask setisTaskopen={setisTaskopen} isTaskopen={isTaskopen} />
            <CreatenewTask  setisnewTask ={setisnewTask}  isnewtask ={isnewtask} handClick={handClick}/>
        </div>


    );
    
};

export default WebTask;
function CreateTask({isTaskopen, setisTaskopen}) {
    return (


        <div id="authentication-modal" tabindex="-1" aria-hidden="true"
            class={` fixed flex  w-full ml-96 justify-around items-start p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isTaskopen ? '' : 'hidden'}`}>
            <div class="relative w-full max-w-md max-h-full">

                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" 
                    onClick = {() =>setisTaskopen(false)}
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class=" px-8 py-6 lg:px-8">

                        <div class="flex">

                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Submitt your resume <p class="text-sm ">Send my resume to DigitalTolk</p></h3>

                            <img src="/images/Frame.png" class="ml-24 " />

                        </div >



                    </div >
                    <div class="bg-slate-500 w-full h-14">
                        <div class="flex ml-32">
                            < button
                                type="button"
                                onClick = {() =>setisTaskopen (false)}


                                className="m-4 text-black  cursor-pointer"
                            >
                                Skip
                            </ button>
                            < button 
                                type="button"
                                onClick = {() =>setisTaskopen(false)}

                                className="m-4 text-black  cursor-pointer"
                            >
                                Remind me later
                            </ button>


                        </div>

                    </div>
                </div>
            </div>
             
        </div>

    )
};

 function CreatenewTask ({isnewtask ,setisnewTask, handClick}){
    return (
        

<div id="authentication-modal" tabindex="-1" aria-hidden="true" 
class={` fixed flex just w-full  justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isnewtask ? '' : 'hidden'}`}>
    <div class="relative w-full max-w-md max-h-full">
       
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" 
                    onClick = {() =>setisnewTask(false)}
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 
                class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >New Task</h3>
                
                <div class= " mt-6 ">
                <input type="text"
    id="password" 
    placeholder='Summary'
    

    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl
     focus:ring-blue-500 focus:border-blue-500 block  px-12 py-4 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
       dark:focus:border-blue-500 " required/>
       </div>

       <div class= " mt-6">
                <input type="text"
    id="password" 
    placeholder='Description'

    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl
     focus:ring-blue-500 focus:border-blue-500 block  px-12 py-14 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
       dark:focus:border-blue-500" required/>
       </div>

       <div class = "mt-6">
                <input type="text"
    id="password" 
    placeholder='Due Date'

    class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl
     focus:ring-blue-500 focus:border-blue-500 block  px-12 py-4 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
       dark:focus:border-blue-500" required/>
       </div>
                    </div>
                    <div class  >
< button  onSubmit={handClick}
          type="button"
          size = "medium"
         variant = "secondary"
          className="w-60 cursor-pointer ml-24 text-white bg-black rounded-xl px-10 py-3"
         
          >
            Save
          </button>
<div class = "mt-4 mb-6">
          < button
          type="button"
          onClick = {() =>setisnewTask(false)}
        
      
          className="w-full text-black bg-white   px-10 py-3"
          >
            Discard
            </button>
          
            
                    
            </div>
            
          </div>
          
            </div>

    </div>
    </div>

    )
 }

