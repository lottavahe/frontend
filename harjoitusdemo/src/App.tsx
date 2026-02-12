import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }

  return (
  <>
  <h5>Counter: {count}</h5>
  <button onClick={increase}>Increase</button>
  </>
  )
}

export default App
