import React, { useState } from 'react'

export default function TodoCreate({createTodo}) {
  const [title,setTitle]=useState('')
  const handleSubmitAddTodo=(e)=>{
    e.preventDefault()
    console.log(title)
    if(title.trim().length>0){
      createTodo(title)
      setTitle('')
    }
    
  }
  return (
   <div className="flex  mt-6   px-4  p-4 ">
    <span className="border bg-gray-500 border-solid  p-3 rounded-full "> </span>
    <form onSubmit={handleSubmitAddTodo}>
      
      <input type="text" className='focus-shadow-lg font-inter font-EBGaramond ' placeholder="crear una nueva tarea" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      
      />
      
    </form>
  </div>
  )
}
