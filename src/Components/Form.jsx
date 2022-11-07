import React,{useState,useContext} from "react";
import { Context } from "../Context";

export default function Form(){
    const {todos,add} = useContext(Context)
    const [value,setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        if(value){
            console.log(value)
        } else return
        setValue("")
        add(value)
        
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={e=>setValue(e.target.value)}
                placeholder="Type your todo"
            />
            <button>+</button>
        </form>
        </>
    )
}