import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Users from './Users/Users.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Posts from './Posts/Posts.jsx';
import PostDetails from './Posts/PostDetails.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex justify-center items-center text-center gap-8'>
                 <Home />
            </div>,
    errorElement: <div className='flex justify-center items-center text-center gap-8 mt-20'>
                 <ErrorPage />
            </div>,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/users',
        loader: () => fetch('/public/user.json'),
        element: <Users />
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
