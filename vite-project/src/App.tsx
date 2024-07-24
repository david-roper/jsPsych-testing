import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {initJsPsych} from 'jspsych';


function App() {
  const [count, setCount] = useState(0)
  const jsPsych = initJsPsych();

  return (
    <>
     
    </>
  )
}

export default App
