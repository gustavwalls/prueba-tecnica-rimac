import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import LayoutPage from './modules/Layout/pages/LayoutPage';
import HomePage from './modules/home/pages/HomePage';
import ErrorPage from './shared/ErrorPage';
import ResumePage from './modules/resume/pages/ResumePage';

const router = createBrowserRouter([
  {
    path: "/",    
    element: <LayoutPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>,
        errorElement:<ErrorPage/>
      },
      {
        path: "/resume",
        element: <ResumePage/>,
        errorElement:<ErrorPage/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
