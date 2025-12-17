import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react'

const Cards = ({item,index,deleteTask,isComplete,editTask}) => {
  return (
    <div className='flex justify-between items-center xl:p-2 2xl:p-4 xl:text-lg 2xl:text-xl shadow-md shadow-black/60 font-semibold text-white rounded-md bg-linear-to-r from-blue-500 to-purple-500'>
      <div className='flex justify-center items-center p-2'>
        <input type="checkbox" onChange={()=>{isComplete(item.id)}} className='mr-2 size-5' />
        <div className={`${item.status ? 'text-green-500 line-through':'text-white'}`}>{index+1}. {item.task}</div>
      </div>
        <div className='flex gap-3'>
          <button onClick={()=>{editTask(item.id)}} className='border rounded-lg px-2 py-1 shadow-black active:shadow-inner active:translate-y-0.5'><EditOutlinedIcon className='xl:text-3xl! 2xl:text-4xl!' /></button>
          <button onClick={()=>{deleteTask(item.id)}} className='border rounded-lg px-2 py-1 shadow-black active:shadow-inner active:translate-y-0.5  '><DeleteOutlineIcon className='xl:text-3xl! 2xl:text-4xl!' /></button>
        </div>
    </div>
  )
}

export default Cards
