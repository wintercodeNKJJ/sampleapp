import React from 'react'
import {LiaUserPlusSolid} from 'react-icons/lia'
import {BsFullscreen, BsLightbulb, BsStar, BsThreeDots} from 'react-icons/bs'
import {BiNote} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import { useMyContext } from '../../utils/context'

const MainList = ({cathegory,title_position}) => {

  const {setShowModif} = useMyContext()
  return (
    <div className='main-list'>
      <div>
        <div className='main-title'>
          <div className='headline'>
            <h1>{cathegory.selection_title[title_position]}</h1>
            <p>thursday, August 1</p>
          </div>
          <div className='main-options'>
            {cathegory.options.includes('Share list') && <i><LiaUserPlusSolid size={18}/></i>}
            {cathegory.options.includes('keep on top') &&<i><BsFullscreen size={18}/></i>}
            {cathegory.options.includes('sugestion') &&<i><BsLightbulb size={18}/></i>}
            {cathegory.options.includes('dots') &&<i><BsThreeDots size={18}/></i>}
          </div>
        </div>
        <div className='main-item-list'>
          <div className='main-item' onClick={()=>setShowModif(true)}>
            <div className='check'>
              <input type='checkbox'/>
            </div>
            <div className='item-info'>
              <h2>task item</h2>
              <div className='item-subinfo'>
                <p>Tasks</p>.
                <p>0 of 2</p>.
                <i><BiNote size={15}/></i>
              </div>
            </div>
            <div className='star'>
              <i><BsStar size={18}/></i>
            </div>
          </div>
        </div>
      </div>
      <div className='main-add-item relative'>
        <i><AiOutlinePlus size={25}/></i>
        <input type="text" placeholder='Add a task' name="search" id="search" />
      </div>
    </div>
  )
}

export default MainList
