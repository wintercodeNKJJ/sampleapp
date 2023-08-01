import React from 'react'
import Navbar from './navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import { MainLister, Modifier } from '.'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout-box'>
        <div className='layout-title'><p>A partial replica of microsoft todo</p></div>
        <div className='layout-body'>
          <div className='navigation'>
            <Navbar/>
          </div>
          <div className='maincontaint'>
            <Routes>
              <Route path='/Important' element={<MainLister/>}/>
            </Routes>
            <div className='modifier relative'>
              <Modifier/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
