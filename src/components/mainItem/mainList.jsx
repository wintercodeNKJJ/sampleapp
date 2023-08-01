import React, { useEffect, useState } from 'react'
import {LiaUserPlusSolid} from 'react-icons/lia'
import {BsFullscreen, BsLightbulb, BsStar, BsStarFill, BsThreeDots} from 'react-icons/bs'
import {BiNote} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'
import { useMyContext } from '../../utils/context'

const MainList = ({cathegory,title_position}) => {

  const [newTodo, setNewTodo] = useState({
    id: Math.floor(Math.random()*1000),
    state: 0,
    title: '',
    note: '',
    steps:[],
    cathegory: cathegory.selection_rule,
    important: 0,
    reminder: '',
    duedate: '',
    rpeat: '',
    files:[],
    created_at:'',
    updated_at:'',
  })

  const {setShowModif,render,todos,addTodo_Incathegory,modifyTodo} = useMyContext()

  useEffect(()=>{
    console.log(render)
  },[render]);

  
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
          {todos.map((item,i)=>(
            <div key={i}  className='main-item' onClick={()=>{setShowModif(true);modifyTodo(item)}}>
              <div className='check'>
                <input type='checkbox'/>
              </div>
              <div className='item-info'>
                <h2>{item.title}</h2>
                <div className='item-subinfo'>
                  <p>Tasks</p>.
                  {item.steps.length > 0 && <p>{item.steps.filter(x => x.state===1).length} of {item.steps.length}</p>}.
                  { item.note.length > 0 && <i><BiNote size={15}/></i>}
                </div>
              </div>
            {item.important === 0 ?
                <div className='star'>
                  <i><BsStar size={18}/></i>
                </div>:
                <div className='star'>
                  <i><BsStarFill size={18}/></i>
                </div>
            }
            </div>
          ))}
        </div>
      </div>
      <div className='main-add-item relative'>
        <i onClick={()=>addTodo_Incathegory(newTodo,cathegory)}><AiOutlinePlus size={25}/></i>
        <input type="text" placeholder='Add a task' name="search" id="search" onChange={(e)=>setNewTodo({...newTodo,title:e.target.value})}/>
      </div>
    </div>
  )
}

export default MainList
