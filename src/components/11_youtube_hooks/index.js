import { useState } from 'react'
//practice1: using hooks to counter+1
export default function UseStatesDemo() {
    const [counter, setCounter] = useState(0);
    const handleChange = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleChange}>click me +1</button>
        </div>
    )
}
