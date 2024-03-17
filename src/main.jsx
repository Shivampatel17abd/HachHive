import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Landingpage from './components/Landingpage.jsx'
import About from './components/About.jsx'
import Comu from './components/Comu.jsx'
import Text from './components/Text.jsx'
import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Community from './components/Community.jsx'
import Extension from './components/Extension.jsx'


// const router = createBrowserRouter(
//   createBrowserRouter(

//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Landingpage/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='community' element={<Comu/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Landingpage/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"community",
        element:<Community/>
      },
      {
        path:"text_to_speech",
        element:<Text/>
      },
      {
        path:"extension",
        element:<Extension/>
      }
      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider
    router={router}
    />
    
  </React.StrictMode>,
)
