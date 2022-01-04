import { useState } from 'react'
//https://www.youtube.com/watch?v=LlvBzyy-558&t=1200s
//practice3.0
export default function UseStateCountDemo() {
    
    const [counter, setCounter] = useState(0)
    const [showText, setShowText] = useState("This is text from useState")
    // const handleCounter=()=>{
    //     setCounter(counter+1)
    // }
    // const handleShowText=()=>{
    //     setShowText(!showText)
    // }
    return (
        <div>
            <h1>{counter}</h1>
            {showText ? <p>This is a text</p> : <p></p>}
            <button onClick={() => {
                setCounter(counter+1)
                setShowText(!showText)
            }}>
                Click me
            </button>
        </div>
    )
}
