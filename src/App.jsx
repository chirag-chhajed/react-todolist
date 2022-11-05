import React,{ useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Todo from './Components/Todo'


import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Form/>
      <main>
        <Todo/>
      </main>
    </>
      
  )
}

export default App
