import React from 'react'
import { BsCalendar3, BsSearch, BsStar, BsSun } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiList } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useMyContext } from '../../utils/context'

const Navbar = () => {

  const {setShowModif} = useMyContext()

  return (
    <nav className='relative h-full'>
      <div className='nav-user'>
        <img src="/" alt="user"/>
        <div>
          <h1>User Name</h1>
          <p>username@example.com</p>
        </div>
      </div>
      <div className='search'>
        <input type="text" name="search" id="search" />
        <i><BsSearch/></i>
      </div>
      <div className='nav-cathegory'>
        <NavLink to="/" className={({isActive})=>(isActive? "cath selected":"cath")} onClick={()=>setShowModif(false)}>
          <i><BsSun size={18}/></i>
          <h2>My day</h2>
          <p>2</p>
        </NavLink>
        <NavLink to="/Important" className={({isActive})=>(isActive? "cath selected":"cath")} onClick={()=>setShowModif(false)}>
          <i><BsStar size={18}/></i>
          <h2>Important</h2>
          <p>1</p>
        </NavLink>
        <NavLink to="/Planed" className={({isActive})=>(isActive? "cath selected":"cath")} onClick={()=>setShowModif(false)}>
          <i><BsCalendar3 size={18}/></i>
          <h2>Planed</h2>
        </NavLink>
        <NavLink to="/Assigned" className={({isActive})=>(isActive? "cath selected":"cath")} onClick={()=>setShowModif(false)}>
          <i><HiOutlineUser size={18}/></i>
          <h2>Assigned to me</h2>
        </NavLink>
        <NavLink to="/Task" className={({isActive})=>(isActive? "cath selected":"cath")} onClick={()=>setShowModif(false)}>
          <i><BiHomeAlt2 size={18}/></i>
          <h2>Task</h2>
          <p>5</p>
        </NavLink>
      </div>
      <hr />
      <div className='nav-cathegory'>
        <NavLink to="/Created" className={({isActive})=>(isActive? "cath list selected":"cath list")} onClick={()=>setShowModif(false)}>
          <i><FiList size={18}/></i>
          <h2>List tile</h2>
          <p>2</p>
        </NavLink>
      </div>

      <div className='add'>
        <i><AiOutlinePlus size={18}/></i>
        <h2>New List</h2>
      </div>
    </nav>
  )
}

export default Navbar
