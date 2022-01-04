import { useState } from 'react'
//https://www.youtube.com/watch?v=LlvBzyy-558&t=300s
//practice2: change input states
export default function InputDemo() {
    //input, e.target.value
    const [inputValue, setInputValue] = useState("");

   const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input label="Input:" placeholder="Enter sth..." onChange={handleChange}/>
            <p>output:{inputValue}</p>
        </div>
    )
}
