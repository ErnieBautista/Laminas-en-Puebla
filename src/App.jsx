import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-primary'>Hola</h1>
    </>
  )
}

export default App
