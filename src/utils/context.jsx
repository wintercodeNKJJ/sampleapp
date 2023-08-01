import { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext()

export const MyContext = ({children})=>{
  const [todos, settodos] = useState()
  return(
    <Context.Provider
      value={{}}
    >
      {children}
    </Context.Provider>
  )
}

export const useMyContext = ()=> useContext(Context);