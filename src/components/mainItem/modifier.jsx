import React, { useState } from 'react'
import {BsCalendar3, BsStar} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsSun,BsAlarm } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import {TbCalendarTime} from 'react-icons/tb'
import {SlPaperClip} from 'react-icons/sl'
import { GoTrash } from 'react-icons/go'
import { useMyContext } from '../../utils/context'

const Modifier = () => {

  const {setShowModif,modifTodo} = useMyContext()

  const [mtodo, setMtodo] = useState(modifTodo)
  return (
    <>
    {mtodo && 
      <form className='modifier-body'>
        <div className='modifier-top'>
          <div className='entry'>
            <input type='checkbox' className='ckbox' checked={mtodo.state !== 0} />
            <input type="text" placeholder='Title...' name='title' className='modifier-title' value={mtodo.title?mtodo.title:''}/>
            <i><BsStar size={18}/></i>
          </div>

          {mtodo.steps.map((item)=>(
              <div className='entry'>
                <input type='checkbox' className='ckbox' checked={item.state !== 0} />
                <input type="text" placeholder='subitem...' name='title' value={item.step_title} className='modifier-title'/>
              </div>
            ))}

          <div className='add-entry'>
            <i><AiOutlinePlus size={18}/></i>
            <input type="text" placeholder='Next Step' name='title' className='modifier-title'/>
          </div>
        </div>
        <div className='modifier-middle'>
          <div className='middle-option'>
            <div className='op-title'>
              <i><BsSun size={18}/></i>
              <h2>Add to My Day</h2>
            </div>
            <i><RxCross1 size={18}/></i>
          </div>
        </div>

        <div className='modifier-bottom'>
          <div className='bottom-option'>
            <div className='op-title'>
              <i><BsAlarm size={18}/></i>
              <h2>Remind me</h2>
            </div>
          </div>
          <div className='bottom-option'>
            <div className='op-title'>
              <i><BsCalendar3 size={18}/></i>
              <h2>Add due date</h2>
            </div>
          </div>
          <div className='bottom-option'>
            <div className='op-title'>
              <i><TbCalendarTime size={18}/></i>
              <h2>Repeat</h2>
            </div>
          </div>
        </div>

        <div className='modifier-middle'>
          <div className='middle-option'>
            <div className='op-title'>
              <i><SlPaperClip size={18}/></i>
              <h2>Add to My Day</h2>
            </div>
          </div>
        </div>

        <div className='modifier-middle'>
          <div className='middle-textarea'>
            <textarea name="note" id="note" cols="30" rows="4" value={mtodo.note?mtodo.note:''}></textarea>
            <p>Updated yesterday</p>
          </div>
        </div>

        <div className='bottom-delete-info'>
          <p>Created yesterday</p>
          <i><GoTrash size={18}/></i>
        </div>

        <div className='top-close-info'>
          <i onClick={()=>setShowModif(false)}><RxCross1 size={18}/></i>
        </div>
      </form>
    }
    </>
  )
}

export default Modifier
