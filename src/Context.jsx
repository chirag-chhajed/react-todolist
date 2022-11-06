import { nanoid } from "nanoid";
import React,{createContext,useState} from "react";

const Context = createContext()

function ContextProvider({children}){
    const [todos,setTodos] = useState([{
        text: "This is a sample todo",
        id: nanoid(),
        isDone: false
    }])

    const add = text => {
        const newTodos = [...todos,{text: text, id: nanoid(), isDone: false}]
        setTodos(newTodos)
    }

    return(
        <Context.Provider value={{todos,add}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}