import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef=useRef(null)

  const generatePassword = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for(let i=0;i<length;i++){
      const char=Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  })

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])

  return (
    <>
      <h1>Password Genrator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
        /><button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div>

      <div>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}

        /><label htmlFor='length'>length : {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor='number'>Number</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor='character'>Character</label>
      </div>
      </div>
    </>
  )
}

export default App
