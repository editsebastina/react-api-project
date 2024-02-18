import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()-_=+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1) // generating random number
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  useEffect(()=> {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 4)
  }

  return (
    <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="my-3 text-center text-white">Password Generator</h1>
        <div className="flex flex-col mb-4 overflow-hidden rounded-lg shadow">
            <div className="flex w-full mb-4 overflow-hidden rounded-lg shadow">
                <input 
                  type="text" 
                  value={password} 
                  className="w-full px-3 py-1 outline-none" 
                  placeholder="Password" 
                  readOnly
                  ref={passwordRef}
                />
                <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center w-full gap-x-1">
                    <input 
                      type="range" 
                      min={6}
                      max={100}
                      value={length}
                      className="cursor-pointer"
                      onChange={ (e) => setLength(e.target.value)}
                      name="" 
                      id=""
                    />
                    <label htmlFor="lenght">Length: {length}</label>
                </div>
                <div className="flex items-center w-full gap-x-1">
                    <input 
                      type="checkbox"
                      defaultChecked={numberAllowed}
                      onChange={()=> {
                        setNumberAllowed((prev) => !prev)
                      }}
                      name="" 
                      id=""
                    />
                    <label htmlFor="lenght">Numbers</label>
                </div>
                <div className="flex items-center w-full gap-x-1">
                    <input 
                      type="checkbox"
                      defaultChecked={charAllowed}
                      onChange={()=> {
                        setCharAllowed((prev) => !prev)
                      }}
                      name="" 
                      id=""
                    />
                    <label htmlFor="character">Character</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
