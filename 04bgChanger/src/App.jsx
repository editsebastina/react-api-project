import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200 bg-black" style={{backgroundColor:color}}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12"> 
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl"> 
          <button onClick={() => setColor("red")} className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor:"red"}}>red</button>
          <button onClick={() => setColor("blue")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={() => setColor("olive")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={() => setColor("violet")} className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor:"violet"}}>violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
