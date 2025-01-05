
import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos,removeTodo,updateTodo}) {
  return (
    <>

    {
      todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
              )
      )
    }
  
    </>
  )
}
