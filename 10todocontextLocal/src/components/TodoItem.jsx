import React,  {useState} from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleTodo} = useTodo()

    const editTodo = () =>{
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>[
        toggleTodo(todo.id)
    ]

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shdow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a6]" : "bg-[#ccbed7]"}`}>
        <input 
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input 
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        />
        <button
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={()=>{
                if(todo.completed) return
                if (isTodoEditable){
                    editTodo()
                } else {
                    setIsTodoEditable((prev) => !prev)
                }
            }}
            disabled={todo.completed}
        >{isTodoEditable ? "save" : "edit"}</button>
        <button 
            className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
        >
            delete
        </button>
    </div>
  )
}

export default TodoItem