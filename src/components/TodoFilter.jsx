import React from 'react'

export default function TodoFilter({setFilter}) {

  const changeFilter=(a)=>{
    setFilter(a)
  }
  return (
    <section className='container mx-auto px-4 '>
      
    <button className="bg-white rounded-sm m-2" onClick={()=>changeFilter("all")}>all</button>
    
    <button className="bg-orange-300 rounded-sm border-separate m-2" onClick={()=>changeFilter("active")}>
      active
    </button>
    <button className="bg-red-500 rounded-sm border-separate m-2"  onClick={()=>changeFilter("completed")}>completed</button>
  </section>
  )
}
