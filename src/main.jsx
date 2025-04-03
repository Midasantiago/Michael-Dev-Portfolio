import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.jsx'

import Homepage from './pages/Homepage.jsx';
import Project from './pages/Project.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong Page!</h1>,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/project/:id',
        element: <Project />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
