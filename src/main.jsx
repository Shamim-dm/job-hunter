import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';
import Statistics from './components/Statistices/Statistics';
import AppliedJob from './components/Applied-Jobs/AppliedJob';
import Blog from './components/Blog/Blog';
import Main from './components/Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main> ,
    children:[
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-job',
        element: <AppliedJob></AppliedJob>
      },
      {
        path:'blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
