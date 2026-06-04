import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react'

const Cards = ({item,index,deleteTask,isComplete,editTask}) => {
  return (
    <div className='flex justify-between items-center p-1 xl:p-2 2xl:p-4 h-10 md:h-11 xl:h-14 2xl:h-20 text-xs md:text-sm xl:text-lg 2xl:text-xl shadow-md shadow-black/60 font-semibold text-white rounded-md bg-linear-to-r from-blue-500 to-purple-500'>
      <div className='flex justify-center items-center p-2'>
        <input type="checkbox" checked={item.status} onChange={()=>{isComplete(item.id)}} className='mr-2 size-4 md:size-5 accent-emerald-500' />
        <div className={`transition-all duration-200 ${item.status ? 'text-green-500 line-through':'text-white'}`}>{index+1}. {item.task}</div>
      </div>
        <div className='flex gap-1 md:gap-3'>
          <button onClick={()=>{editTask(item.id)}} className='border rounded-md xl:rounded-lg p-1 md:px-2 shadow-black active:shadow-inner active:translate-y-0.5'><EditOutlinedIcon className='text-lg! md:text-xl! xl:text-3xl! 2xl:text-4xl!' /></button>
          <button onClick={()=>{deleteTask(item.id)}} className='border rounded-md xl:rounded-lg p-1 md:px-2 shadow-black active:shadow-inner active:translate-y-0.5 '><DeleteOutlineIcon className='text-lg! md:text-xl! xl:text-3xl! 2xl:text-4xl!' /></button>
        </div>
    </div>
  )
}

export default Cards
