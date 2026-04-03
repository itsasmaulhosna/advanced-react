import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

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
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path:'posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails
      }
  ],
  
  
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

