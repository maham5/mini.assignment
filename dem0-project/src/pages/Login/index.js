import React from "react";
import { Link } from "react-router-dom";
import { Input1 } from "../../components/input";
import { Buttons } from "../../components/Button";

const Login = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data ", event)
  }
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg">
        <form onSubmit={onSubmit} className="bg-slate-200 border border-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <h3 className=" text-center text-2xl">Login</h3>
           
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Username
            </label>
            
            <Input1
              label="username"
              id="username"
              name="username"
              type = "text"
            />
           </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Password
            </label>
            <input className="shadow appearance-none  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>

          </div>
          <div className="flex items-center justify-between">

          < Buttons 
          type="button"
          size = "large"
          variant = "primary"
          className="w-full"
          >
              Login
            </ Buttons>
          


          </div>
          <p className="text-center">If you dont have an account  <Link to={'/register'} className="underline text-red-600 hover:text-sky-600">Register</Link></p>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Login;