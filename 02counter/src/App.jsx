import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(5)
  
  //let counter = 5

  const AddValue = () => {
    console.log("value added",counter)
    //counter=counter+1;
    setCounter(counter+1)
  }
  const Decvalue = () => {
    console.log("value removed",counter)
    setCounter(counter-1)
  }
  return (
    <>
    <h1>counter app</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={AddValue}>
    Add value
    </button>
    <br></br>
    <button
    onClick={Decvalue}>
      Decrease value
      </button>
    </>
  )
}

export default App
