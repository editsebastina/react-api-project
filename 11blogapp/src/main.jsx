import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'

import Protected from './components/AuthLayout.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
import AddPost from './pages/AddPost.jsx'


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: 
        <Protected authentication={false}>
          <Login /> 
        </Protected>        
      },
      { path: "/signup", element: 
        <Protected authentication={false}>
          <SignUpPage /> 
        </Protected>   
      },
      { path: "/all-posts", element: 
        <Protected  authentication>
          <AllPosts /> 
        </Protected>
      },
      { path: "/add-post", element: 
        <Protected  authentication>
          <AddPost /> 
        </Protected>
      },
      { path: "/edit-post/:slug", element: 
        <Protected  authentication>
          <EditPost /> 
        </Protected>
      },
      { path: "/post/:slug", element: 
        <Protected  authentication>
          <Post /> 
        </Protected> 
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
