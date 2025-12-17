import React,{useState} from 'react'

const UpdateFormTodo = ({item,updateTask}) => {

  const[value,setValue]=useState(item.task)

  const handleUpdate = (e)=>{
    e.preventDefault()
    updateTask(value,item.id)
    setValue("")
  }

  return (
        <form onSubmit={handleUpdate} className="flex justify-between gap-5">
          <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} className="shadow-md shadow-black pl-5 w-140 h-15 text-xl text-gray-500 bg-stone-50 rounded-xl focus:outline-none" placeholder="Edit your Task" />
          <button type='submit' className="bg-purple-600 text-2xl py-3 px-5 rounded-xl shadow-md shadow-black hover:bg-purple-500 active:shadow-sm active:translate-y-0.5 text-white">Enter  </button>
        </form>
  )
}

export default UpdateFormTodo
