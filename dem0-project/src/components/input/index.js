import React from "react";

export const Input1 = (type, name, Inputid, defaultValue, label, helpertext, error,value , onChange) => {
    return (
        <div>
            {label && <label className=" block text-sm text-gray-600 font-bold ">{label}</label>}
            {helpertext && <label className=" block text-sm text-gray-600 font-bold">{helpertext}</label>}
            <input
                type={type}
                name={name}
                id={Inputid}
                value ={value}
                onChange={onChange}
               
                defaultValue={defaultValue}
                className={'"shadow appearance-none  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"'}

            />
            < p className=" text-red-600 text-sm mt-2">{error}  </p>
        </div>
    )

};