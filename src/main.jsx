import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from "react-router";
import { createBrowserRouter, RouterProvider, useParams } from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

const router=createBrowserRouter([{
  path:'/',
  Component:Root,
  children:[
    {index:true, Component:Home},
    {path:'mobiles',Component:Mobiles},
    {path:'laptops',Component:Laptops},
    {path:'users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      Component:Users},
      {path:'users/:userId',
        loader:({params})=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:UserDetails
      }
  ]
},
{
  path:'/home',
  element:<div>Welcome to homepage</div>
},
{
  path:'/about',
  element:<div>About us</div>
},
{
  path:'App',
  Component:App
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)

