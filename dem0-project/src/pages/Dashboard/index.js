import React, { useEffect, useState } from "react";
import { Input1 } from "../../components/input";
import { Buttons } from "../../components/Button";
import axios from "axios";

const Dashboard = () => {
    let arr = [
        {
            id:1,
            title: "Intro to css",
            author: "Adam"
        },
        {
            id:2,
            title: "A thirsty crow",
            author: "Adam"
        },

        {
            id:3,
            title: "A wild life",
            author: "Maham"
        }
    ]
   
 

    const [items, setItems] = useState(arr);
    const [isModalOpen , setisModalOpen] = useState(false);
    const [title , setTitle] = useState('')
    const [author , setAuthor] = useState('')
   


    const handClick = (e) =>{
     e.preventDefault();
       let obj= {
        title :  title,
        author : author,

       }
       items.push(obj)
       setItems([...items]);
       setisModalOpen(false)
     
    }
    const handEdit = (name)=>{
        const found = items.find(item => item.author === name)
        setTitle(found.title)
       setAuthor(found.author)

        setisModalOpen(true)
           }

   
 
    return (
        <div className="   flex  justify-center items-center min-h-screen">
            <div class="  border border-gray-300 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            < Buttons 
          type="button"
          size = "large"
          variant = "primary"
          className="mr-3  cursor-pointer"
          onClick ={() =>setisModalOpen(true)}
          >
              Add
            </ Buttons>
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class=" px-4 py-2 text-gray-600">
                                Title
                            </th>
                            <th class=" px-4 py-2 text-gray-600">
                                Author
                            </th>

                            <th class=" px-4 py-2 text-gray-600">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td class="border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.title}</td>
                                <td class="border border-gray-500 px-4 py-2 text-gray-600 font-medium">{item.author}</td>
                                <td class="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                                < Buttons onClick = {() =>handEdit(item.author,item.title)}
          type="button"
          size = "large"
          variant = "primary"
          className="mr-3 cursor-pointer"
          
          >
              Edit
            </ Buttons>
            < Buttons 
          type="button"
          size = "large"
          variant = "danger"
          className="mr-3   cursor-pointer"
          
          >
              Delete
            </ Buttons>
                                </td>
                            </tr>
                        ))}




                    </tbody>
                </table>

            </div>
            <CreateModal 
            setisModalOpen =  {setisModalOpen} 
            isModalOpen ={isModalOpen} 
            handClick={handClick} 
            setTitle = {setTitle} 
            title = {title} 
            setAuthor =  {setAuthor}
            author = {author}
            
            />
       
        </div>
    )      
 }


export default Dashboard;
function CreateModal({isModalOpen , setisModalOpen, handClick,  setTitle,  title , author ,setAuthor,  }) 
{
    return (


        <div id="authentication-modal"
         tabindex="-1" 
        aria-hidden="true" 
        class={`fixed flex justify-center items-center w-full p-4 overflow-x-hidden  overflow-y-auto  md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen ? '' : 'hidden'}`}>

            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-slate-300 rounded-lg shadow">
             
                    <button type="button" 
                    onClick = {() =>setisModalOpen(false)}
                    class="absolute top-3 right-2.5 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900
                     rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                     data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900">Sign in to our platform</h3>
                        <form class="space-y-6" 
                       onSubmit={handClick}
                            action="#">
                    <div className="mb-4">
            <label className="block text-black-500 text-sm font-bold mb-2" >
            Title
            </label>
            
            <Input1
              label="username"
              id="username"
              name="username"
              type = "text"
              value ={title}
              onChange = {e => setTitle (e.target.value)}
           
            />
           </div>
           <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2" >
            Author
            </label>
            
            <Input1
              label="username"
              id="username"
              name="username"
              value = {author}
              onChange = {e => setAuthor(e.target.value)}
             
              type = "text"
            />
           </div>


<div class = "flex justify-center items-center">
< Buttons  
          type="button"
          size = "large"
          variant = "primary"
          className="mr-3 cursor-pointer"
         
          >
              Add
            </ Buttons>
            < Buttons 
          type="button"
          size = "large"
          variant = "danger"
          className="mr-3  cursor-pointer"
        
          onClick = {() =>setisModalOpen(false)}
          >
              Cancel
            </ Buttons>
</div>
                                
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

