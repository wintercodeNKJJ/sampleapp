import React from 'react'
import {BsStar} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsSun } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'

const Modifier = () => {
  return (
    <form className='modifier-body'>
      <div className='modifier-top'>
        <div className='entry'>
          <input type='checkbox' className='ckbox'/>
          <input type="text" placeholder='Title...' name='title' className='modifier-title'/>
          <i><BsStar size={20}/></i>
        </div>

        <div className='entry'>
          <input type='checkbox' className='ckbox'/>
          <input type="text" placeholder='subitem...' name='title' className='modifier-title'/>
        </div>

        <div className='add-entry'>
          <i><AiOutlinePlus size={20}/></i>
          <input type="text" placeholder='Next Step' name='title' className='modifier-title'/>
        </div>
      </div>
      <div className='modifier-middle'>
        <div className='middle-option'>
          <div className='op-title'>
            <i><BsSun size={20}/></i>
            <h2>Add to My Day</h2>
          </div>
          <i><RxCross1 size={20}/></i>
        </div>
      </div>
    </form>
  )
}

export default Modifier
