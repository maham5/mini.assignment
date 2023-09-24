import React  from "react";

 const variants ={
primary  : "bg-indigo-600 text-white hover: enabled : bg-indigo-700 focus:ring-indigo-700",
secondary:"bg-black text-white hover :enabled : bg-black " ,
    danger :"bg-red-600 text-white hover: enabled :bg-red-700 focus : ring-red-500",
    naked : "hover : text-gray-600 text gray-500 shadow-none ",
    
}
 const sizes={
    small : "px-2 py-1 text-xs leading-1",

    medium :"px4 py-2 text-sm",
    large :"px-4 py-2 text-base"

 }

 export const Buttons = ( {className , variant = "primary" , size = "small " , ...props}) =>{
    return (
    <button
      className={`inline-flex justify-center items-center border border-transparent roumded-md font-medium shadow-sm focus:outline-none 
       focus : ring-2 focus:ring-offset-2 diabled: cursor-not-allowed disabled:opacity-50 
       ${className}
       ${variants[variant]}
       ${sizes[size]}


       `}
       {...props}
      />
    )


 };