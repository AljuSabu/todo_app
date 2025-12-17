import { useEffect, useState } from "react"
import Todo_form from "./components/Todo_form"
import Cards from "./components/Cards"
import UpdateFormTodo from "./components/UpdateFormTodo"


const localList = ()=>{
  const list = localStorage.getItem('data')
    if(list){
      return JSON.parse(list)
    }else{
      return []
    }
}

function App() {
  
  const[time,setTime]=useState(new Date())
  const[todoList,setTodoList] = useState(localList())
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
    let newEntry = {id:num, task:newTask, status:false}
    setTodoList([...todoList, newEntry])
    setnewTask("")
  }

  //Local storge
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todoList))
  },[todoList])

  //Delete Task
  const deleteTask =(id)=>{
    const newTodoList = todoList.filter((item)=>{
      return item.id != id
    })
    setTodoList(newTodoList)
  }

  //Is Complete
  const isComplete = (id)=>{
    setTodoList(todoList.map((item)=>{
      if(item.id===id){
        return {...item,status:true}
      }else{
        return item
      }
    }))
  }

  //Edit Task
  const editTask = (id)=>{
    setTodoList(todoList.map((item)=>{
      return item.id === id ? {...item, isEditting:!item.isEditting} : item
    }))
  }

  //Update Task
  const updateTask = (modifiedTask,id)=>{
    setTodoList(todoList.map((item)=>{
      return item.id === id ? {...item, task:modifiedTask, isEditting:!item.isEditting} : item
    }))
  }

  return (
    <>
    <div className="min-h-screen relative w-full flex justify-center items-start bg-[url(public/background.jpg)] bg-cover bg-center">
    <div class="absolute inset-0 bg-black/20"></div>
      <div className="border relative z-10 min-h-100 xl:w-135 2xl:w-180 xl:mt-20 2xl:mt-10 mb-10 p-2">
        <div className="border flex justify-between px-2">
          <h1 className="border xl:text-4xl 2xl:text-6xl font-bold text-white">TODO</h1>
          <div className="border xl:text-3xl 2xl:text-4xl xl:mt-2 2xl:mt-3 font-orbitron">{formattedTime}</div>
        </div>
        <Todo_form handleSubmit={addTask} value={newTask} setValue={setnewTask} />
        {todoList.length===0 ? (
          ''
        ):(
        <div className="border flex overflow-auto scrollbar-gutter-stable flex-col gap-5 p-5 xl:pl-5 2xl:px-10 w-full xl:max-h-100 2xl:max-h-150 rounded-xl bg-transparent shadow-md shadow-black xl:mt-10">
          {
            todoList.map((item,index)=>{
              return item.isEditting ? (
                  <UpdateFormTodo item={item} updateTask={updateTask} />
              ) : ( 
                <div key={item.id}>
                  <Cards item={item} index={index} deleteTask={deleteTask} isComplete={isComplete} editTask={editTask} />
                </div>
              )
            })
          }
        </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
