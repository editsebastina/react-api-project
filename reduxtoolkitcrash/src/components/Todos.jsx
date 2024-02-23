import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state)=> state.todos)

  return (
    <>
        <div>Todos:</div>
        <ul className="list-none">
            {todos.map((todo)=> (
                <li key={todo.id} className="flex items-center justify-between px-4 pt-2 pb-2 mt-4 mb-4 rounded bg-zinc-800">
                    <div className="text-white">{todo.text}</div>
                    <button 
                        onClick={() =>dispatch(removeTodo(todo.id))}
                        className="px-4 py-1 text-white border-0 rounded g-red-500 focus:outline-none hover:bg-red-600 text-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M5 6V22a1 1 0 001 1h12a1 1 0 001-1V6M10 11v8M14 11v8" />
                        </svg>
                    </button>
                </li>
            ) )}
        </ul>
    </>
  )
}

export default Todos