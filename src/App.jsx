import { useEffect, useState } from "react"
import Todo_form from "./components/Todo_form"
import Cards from "./components/Cards"

function App() {
  
  const[time,setTime]=useState(new Date())
    const[todoList,setTodoList] = useState([
    {id:1 ,task:'car wash'},
    {id:2 ,task:'complete Project'},
    {id:3 ,task:'have lunch'}
  ])
  const[newTask,setnewTask]=useState("")

  //Time Setting
  useEffect(()=>{
      const timer = setInterval(()=>{
      setTime(new Date())
    },1000)
    return ()=>{clearInterval(timer)}
  },[])
  const formattedTime = time.toLocaleTimeString()

  //Add Task
  const addTask = (e)=>{
    e.preventDefault()
    if(!newTask){
      alert('Enter a Task')
      return  
    }
    let num = todoList.length === 0 ? 1 : todoList.length + 1
    let newEntry = {id:num, task:newTask}
    setTodoList([...todoList, newEntry])
    setnewTask("")
  }

  //Delete Task
  const deleteTask =(taskId)=>{
    const newTodoList = todoList.filter((item)=>{
      return item.id != taskId
    })
    setTodoList(newTodoList)
  }

  return (
    <>
    <div className="h-screen flex justify-center items-center bg-[url(public/background.jpg)] bg-cover bg-center">
      <div className="h-210 w-180 relative top-10 p-2">
        <div className="flex justify-between px-2">
          <h1 className="text-6xl font-bold text-white">TODO</h1>
          <div className="text-4xl mt-3 font-orbitron">{formattedTime}</div>
        </div>
        <Todo_form handleSubmit={addTask} value={newTask} setValue={setnewTask} />
        <div className="flex overflow-auto scrollbar-gutter-stable flex-col gap-5 p-5 pl-10 w-full h-150 rounded-xl bg-transparent shadow-md shadow-black mt-10">
          {
            todoList.map((item,index)=>{
              return(
                <div key={item.id}>
                  <Cards item={item} index={index} deleteTask={deleteTask} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App
