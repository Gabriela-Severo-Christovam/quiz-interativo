import { useState } from 'react'
import Header from './components/Header'
import './App.module.css'
import Questions from './components/QuestionCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Header/>
     <Questions /> 
     </div>
     
    </>
  )
}

export default App
