import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Edith",
    age: 25, 
    address: {
      city: "Szekesfehervar",
      state: "Fejer Varmegye",
      country: "Magyarorszag"
    }
  }
  let newArr= [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className="p-3 text-3xl bg-green-500 rounded-md ">Vite with Tailwind</h1>
      <Card userName="Hitesh" post="Staff Engineer, Algolia"/>
      <Card userName="Edith" myArr={newArr}/>
      <Card />
    </>
  )
}

export default App
