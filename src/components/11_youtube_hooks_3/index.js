import { useReducer } from 'react'
//https://www.youtube.com/watch?v=LlvBzyy-558&t=1200s
//practice3: useReducer

//a: reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "incrementCounter":
            return {
                counter: state.counter + 1,
                showText: state.showText
            };
        case "toggleShowText":
            return {
                counter: state.counter,
                showText: !state.showText
            };
        default:
            return state;
    }
}
export default function ReducerDemo() {
    //b: useReducer
    const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true })

    //c:ui-dispatch
    console.log("counter", state.counter)
    console.log("showText", state.showText)
    return (
        <div>
            <h1>{state.counter}</h1>
            {state.showText ? <p>This is a text</p> : <p></p>}
            <button onClick={() => {
                dispatch({ type: "incrementCounter" })
                dispatch({ type: "toggleShowText" })
            }}>
                Click me
            </button>
        </div>
    )
}
