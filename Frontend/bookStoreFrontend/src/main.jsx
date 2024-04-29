import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './home/Home.jsx';
import Course from './components/Course.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children: [ 
      {
        path: "/",
        element : <Home></Home>,
      },
      {
        path:"/course",
        element: <Course></Course>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/about",
        element:<About></About>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider  router = {router}/>
)
