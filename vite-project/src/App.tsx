import { useState } from 'react'
import './App.css'
import {initJsPsych} from 'jspsych';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';



function App() {
  
  const jsPsych = initJsPsych();

  const trial = {
    type: htmlKeyboardResponse,
    stimulus: 'Hello world!',
  }

  jsPsych.run([trial]);

  return <></>
}

export default App
