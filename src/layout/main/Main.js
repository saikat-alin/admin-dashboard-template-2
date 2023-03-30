import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavSidebar from '../navSidebar/NavSidebar'

const Main = () => {
  return (
    <div>
      <NavSidebar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main