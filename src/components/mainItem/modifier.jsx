import React from 'react'
import {BsStar} from 'react-icons/bs'

const Modifier = () => {
  return (
    <form className='modifier-body'>
      <div className='modifier-top'>
        <div className='entry'>
          <input type='checkbox' className='ckbox'/>
          <input type="text" placeholder='Title...' name='title' className='modifier-title'/>
          <i><BsStar size={20}/></i>
        </div>
      </div>
    </form>
  )
}

export default Modifier
