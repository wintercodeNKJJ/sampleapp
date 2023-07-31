import { useContext } from "react";
import { createContext } from "react";

const Context = createContext()

export const MyContext = ({children})=>{
  return(
    <Context.Provider
      value={{}}
    >
      {children}
    </Context.Provider>
  )
}

export const useMyContext = ()=> useContext(Context);