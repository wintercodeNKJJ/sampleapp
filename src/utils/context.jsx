import { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext()

export const MyContext = ({children})=>{

  const [render, setRender] = useState(0)

  const [todos, settodos] = useState([
    {
      id: 0,
      state: 0,
      title: 'New Todo',
      note: 'This is a sample note of a to do item',
      steps:[
        {state: 1,step_title:'this is an example of a step'}
      ],
      cathegory: 'My Day',
      important: 0,
      reminder: '',
      duedate: '',
      rpeat: '',
      files:[
        {filte_title:'', file_path:''}
      ],
      created_at:'',
      updated_at:'',
    }
  ])

  const [cathegories, setCathegories] = useState([
    {
      id:0,
      selection_rule:'Myday',
      selection_title:['Myday','Important','Planed','Assigned to me','Task','created'],
      options:['keep on top','sugestion','dots'],
      items_cnt:0
    },
    {
      id:1,
      selection_rule:'Anex',
      selection_title:['Myday','Important','Planed','Assigned to me','Task','created'],
      options:['keep on top','dots'],
      items_cnt:0
    },
    {
      id:2,
      selection_rule:'created',
      selection_title:['Myday','Important','Planed','Assigned to me','Task','created'],
      options:['Share list','sugestion','dots'],
      items_cnt:0
    }
  ])

  /**
   * {
    
   * @param {{
      id: 0,
      state: 0,
      title: 'new Todo',
      note: '',
      steps:[
        {state: 0,step_title:''}
      ],
      cathegory: '',
      reminder: '',
      duedate: '',
      rpeat: '',
      files:[
        {filte_title:'', file_path:''}
      ],
      created_at:'',
      updated_at:'',
    }} todo a todo item to be added to the list
   * @param {{
      id:0,
      selection_rule:'Myday',
      selection_title:['Myday','Important','Planed','Assigned to me','Task'],
      options:['keep on top','sugestion','dots'],
      items_cnt:0
    }} cathegory a cathegory to which the element must be added
   *
   * @returns {} succesfull
   */
  const addTodo_Incathegory = (todo,cathegory)=>{
    let list = todos
    try {
      list.push(todo)
      settodos(list);
      setRender(render+1);
      return "Added Succesfully"
    } catch (error) {
      console.log('Error adding todo');
    }
  }

  /**
   * set modifiation form to visible or invisible
   */
  const [showModif, setShowModif] = useState(false)

  const [modifTodo, setModifTodo] = useState()

  /**
   * Sets atodo for modification
   * @param {any} todo 
   */
  const modifyTodo = (todo)=>{
    try{
      setModifTodo(todo)
    } catch(error) {
      console.log('Error accured',error)
    }
  }
  return(
    <Context.Provider
      value={{
        addTodo_Incathegory,
        setShowModif,
        modifyTodo,

        showModif,
        cathegories,
        todos,
        render,
        modifTodo
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useMyContext = ()=> useContext(Context);