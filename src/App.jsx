import React,{ useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import DoneList from './Components/DoneList'


import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Form/>
      <main>
        <TodoList/>
        <DoneList/>
      </main>
    </>
      
  )
}

export default App
