
import { useState , useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import Themebtn from './components/Themebtn'

function App() {

  const [themeMode, setthemeMode] = useState("light")

const lightTheme = ()=>{
  setthemeMode("light")
}


const darkTheme = ()=>{
  setthemeMode("dark")
}
//actual code to change the theme 

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
         <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Themebtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
          </ThemeProvider>

  )
}

export default App
