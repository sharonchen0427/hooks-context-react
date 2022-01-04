import { useState } from 'react'

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
