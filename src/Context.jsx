import { nanoid } from "nanoid";
import React, { createContext, useState, useEffect } from "react";

const Context = createContext()

function ContextProvider({ children }) {
    const [todos, setTodos] = useState([{
        text: "This is a Sample todo",
        id: nanoid(),
        isDone: false
    }])

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }, [todos])

    const add = text => {
        const newTodos = [...todos, { text: text, id: nanoid(), isDone: false }]
        setTodos(newTodos)
    }

    const deleteTodo = id => {
        setTodos(e => e.filter(todo => todo.id !== id))
    }

    const toggleMarkDone = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone }
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const swapAllTodo = () => {
        const updatedTodos = todos.map(todo => {
            return { ...todo, isDone: true }
           
        })
        setTodos(updatedTodos)

    }

    return (
        <Context.Provider value={{ todos, 
                                    add, 
                                    deleteTodo, 
                                    toggleMarkDone, 
                                    swapAllTodo 
                                }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }