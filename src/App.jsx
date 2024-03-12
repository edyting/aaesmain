import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { RouterProvider,createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from './pages/contact/Contact';




const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Layout />,
      errorElement: <Error/>,
      children:[
        {index:true,element:<Home/>},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        
      ]
    }
  ]
);




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="">
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
    </>
  )
}

export default App
