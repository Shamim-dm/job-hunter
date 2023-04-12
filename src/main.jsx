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
import Jobdatails from './components/JobDatails/JobDatails';
import ApplyJob from './components/ApplyJob/ApplyJob';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: 'home',
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json')
      },

      {
        path: '/:id',
        element: <Jobdatails></Jobdatails>,
        loader: ({ params }) => fetch('/fakeData.json')

        // loader: ({params}) => fetch(`fakeData.json/${params.homeId}`)

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>

      },
      {
        path: 'appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('fakeData.json')

      },
      {
        path: '/:id',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('fakeData.json')

      },
    
      {
        path: 'blog',
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
