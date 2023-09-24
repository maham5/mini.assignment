import logo from './logo.svg';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/Login';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WebLogin from './pages/Weblogin';

import './App.css';
import WebTask from './pages/Webtask';
import Weblocation from './pages/Weblocation';
import Tables from './pages/Tables';

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />

  },
  {
    path: "/register",
    element: <Register />

  },
  {
    path: "/dashboard",
    element: <Dashboard />

  },
  {
    path: "/weblogin",
    element: <WebLogin />

  },
 
  {
    path: "/webtask",
    element: <WebTask />

  },
  {
    path: "/weblocation",
    element: <Weblocation />

  }, {
    path: "/tables",
    element: <Tables/>

  },

])


function App() {
  return (
    <RouterProvider router={router} />
  )

}


export default App;
