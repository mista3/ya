import { useState } from 'react'

export default function CounterPage() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const dencrement = () => {
    setCount(count + 1)
  }
  
  return <div className="page">
    <div className="counter-page">
      <div className="count">{count}</div>
      <div className="count-buttons">
        <button onClick={dencrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  </div>
}