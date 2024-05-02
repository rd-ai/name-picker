import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NamePicker from './components/NamePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NamePicker />
      </div>
    </>
  )
}

export default App
