import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts from './App'
import './index.css'
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, 
    children: [
      {path: '/', element: <Posts />}, //<our-domain></our-domain>
      {path: '/create-post', element: <NewPost />}
    ],
  },
]);
    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
