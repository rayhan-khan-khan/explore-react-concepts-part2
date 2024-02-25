import { useState } from "react"

export default function Counter () {
    const [count , setCount] = useState(0)
    const handleCount = () =>{
        const newTotal = count + 1
        setCount(newTotal);
    }

    const handleReduc = () =>{
        const newMainas = count - 1;
        setCount(newMainas)
    }

    return (
        <div style={{padding: '2px', background: "black", color: 'white'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduc}>Mainas</button>
        </div>
    )
}