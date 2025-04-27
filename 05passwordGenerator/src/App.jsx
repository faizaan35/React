import { useState , useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let  pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="1234567890"
    if(char) str+="!@#$%^&*()_+"

    for (let i = 1; i <= array.length; i++) {
      let c = Math.floor(Math.random() * str.length +1)
      pass=str.charAt(c) 
    }
    
    setPassword(pass)

  },[length,number,char,setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-2 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input
      
          type='text'
          value={Password}
          className='outline-none w-full py-1 px-3 bg-white my-6 rounded-md'
          placeholder='password'
          readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
              <input
              type='range'
              min={5}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >length : {length}</label>
         </div>
      </div>
    </div>
    </>
  )
}

export default App
