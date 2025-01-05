import React from 'react'

export default function CheckIcon({completed,todo,updateTodo}) {
        
  return (
    <>
    { 
        completed
        ? <img onClick={()=>{updateTodo(todo.id)}}src="/check-icon.svg" alt="boton de check" className="h-5 w-5 bg-gradient-to-r from-blue-300 to-yellow-300 rounded-full cursor-pointer transition-all duration-300   bg-white">
        </img>   :  <span onClick={()=>{updateTodo(todo.id)}} alt="boton de check" className="h-5 w-5 bg-gradient-to-r  rounded-full cursor-pointer transition-all duration-300   bg-white">
        </span>
    }

   
    </>

  )
}
