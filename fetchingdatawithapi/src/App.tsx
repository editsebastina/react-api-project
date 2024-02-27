import { useState } from 'react'
import Demo from './index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Demo />
    </>
  )
}

export default App
