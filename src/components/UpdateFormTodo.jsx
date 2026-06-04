import React,{useState} from 'react'

const UpdateFormTodo = ({item,updateTask}) => {

  const[value,setValue]=useState(item.task)

  const handleUpdate = (e)=>{
    e.preventDefault()
    updateTask(value,item.id)
    setValue("")
  }

  return (
        <form onSubmit={handleUpdate} className="flex justify-between gap-4 md:gap-5">
          <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} className="shadow-md shadow-black p-3 md:pl-5 w-37 md:w-60 xl:w-90 2xl:w-140 h-10 md:h-11 xl:h-14 2xl:h-20 text-xs md:text-sm lg:text-base xl:text-xl text-gray-500 bg-stone-50 rounded-md xl:rounded-xl focus:outline-none" placeholder="Edit your Task" />
          <button type='submit' className="bg-purple-600 text-xs md:text-base xl:text-lg 2xl:text-2xl px-3 2xl:px-5 rounded-md xl:rounded-xl shadow-md shadow-black hover:bg-purple-500 active:shadow-sm active:translate-y-0.5 text-white">Update</button>
        </form>
  )
}

export default UpdateFormTodo
