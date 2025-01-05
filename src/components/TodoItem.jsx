import React from 'react'
import CheckIcon from './icons/CheckIcon'
CheckIcon
export default function TodoItem({todo,removeTodo,updateTodo}) {
  return (
    <article className="flex justify-between   bg-gray-500 ">
      <CheckIcon updateTodo={updateTodo} completed={todo.completed} todo={todo}/>
    <p className={`font-EBGaramond ${todo.completed && "line-through"} rounded-sm`}
    
    >{todo.title}</p>
    <img onClick={()=>{removeTodo(todo.id)}} src="/close-icon.svg" alt="boton de cierre" className={`h-5 w-5 cursor-pointer transition-all duration-300   bg-white`}>
    </img>
    </article>
  )
}
