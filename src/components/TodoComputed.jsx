import React from 'react'

export default function TodoComputed({todos,clearTodos}) {
  const todoFaltantes=todos.filter((todo)=>todo.completed==false).length;

  return (
    <section className="bg-white flex  justify-center "> 
        <span className='p-1.5'>
        {todoFaltantes} items left 
        </span>
        <button onClick={clearTodos} className='p-1.5'> Clear Complets</button>
  </section>
  )
}
