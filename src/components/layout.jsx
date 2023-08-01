import React from 'react'
import Navbar from './navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import { MainLister, Modifier } from '.'
import { useMyContext } from '../utils/context'

const Layout = () => {

  const {cathegories,showModif} = useMyContext()

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
              <Route path='/' element={<MainLister cathegory={cathegories[0]} title_position={0}/>}/>
              <Route path='/Important' element={<MainLister cathegory={cathegories[1]} title_position={1}/>}/>
              <Route path='/Planed' element={<MainLister cathegory={cathegories[1]} title_position={2}/>}/>
              <Route path='/Assigned' element={<MainLister cathegory={cathegories[1]} title_position={3}/>}/>
              <Route path='/Task' element={<MainLister cathegory={cathegories[1]} title_position={4}/>}/>
              <Route path='/Created' element={<MainLister cathegory={cathegories[2]} title_position={5}/>}/>
            </Routes>
            {showModif &&
            <div className='modifier relative'>
               <Modifier/>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
