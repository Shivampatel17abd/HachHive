import React from 'react'
import Header from './components/Header'
import Landingpage from "./components/Landingpage"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
      <Header/>
      <Outlet/>
      
   </>
  )
}

export default Layout
