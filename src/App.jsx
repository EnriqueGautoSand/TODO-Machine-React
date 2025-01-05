import './App.css'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'
import { useState } from 'react'
import CheckMoon from './components/icons/CheckMoon'
const initialStateTodos=[
  {id:1,title:'ir a casa',completed:false},
  {id:3,title:'ir a casa mañana',completed:true} ,
  ]
function App() {
  const [todos,setTodos]=useState(initialStateTodos);
  const createTodos =(title)=>{
    const newTodo={
      id: Date.now(),
      title,
      completed:false
    }
    setTodos([...todos,newTodo])

    }
  const removeTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id));
  }
  const updateTodo=(id)=>{
      setTodos(
        todos.map(
          todo=>todo.id==id?{...todo,completed:!todo.completed}:todo
        )
      )

  }
  const clearTodos=()=>{
    setTodos(todos.filter((todo)=>todo.completed==false))
  }

  const [filter,setFilter]=useState("all");

  const filteredTodos=()=>{
      if (filter==="all"){
        return todos
      }else if(filter==="active"){
        return todos.filter((todo)=>!todo.completed)
      }else if(filter==="completed"){
        return todos.filter((todo)=>todo.completed)
      }

    }
  return (
    <>
    <div > 
      agregar imagen de fondo
      <div className="container mx-auto px-4  items-center ">
        <div className="flex bg-white">
          <h1 className='uppercase align-center text-5xl font-Jersey15Charted'>todo machine</h1> 
          <CheckMoon/>
        </div>
        
     

      </div>
      <main className="container mx-auto px-4">
        <TodoCreate createTodo={createTodos} />
        <TodoList todos={filteredTodos()}  removeTodo={removeTodo} updateTodo={updateTodo}/>

        <TodoComputed todos={todos} clearTodos={clearTodos}/>
      </main>
    <TodoFilter setFilter={setFilter}/>
      <p>hacer drag and drop</p>


    </div>
      
    </>
  )
}

export default App
