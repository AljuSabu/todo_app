import React from 'react'

const Todo_form = ({handleSubmit,value,setValue}) => {
  return (
        <form onSubmit={handleSubmit} className="flex justify-between mt-15">
          <input type="text" value={value} setValue={setValue} onChange={(e)=>{setValue(e.target.value)}} className="shadow-md shadow-black pl-5 xl:w-100 2xl:w-140 xl:h-13 2xl:h-15 text-xl text-gray-500 bg-stone-50 rounded-xl focus:outline-none" placeholder="Enter your Task" />
          <button type='submit' className="bg-purple-600 xl:text-xl 2xl:text-2xl py-3 px-5 rounded-xl shadow-md shadow-black hover:bg-purple-500 active:shadow-sm active:translate-y-0.5 text-white">Enter</button>
        </form>
  )
}

export default Todo_form
