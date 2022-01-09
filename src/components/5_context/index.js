import React, { Component,useContext } from 'react'
import {UserContext} from '../../contexts/UserContext'
import C from '../C'
//create context obj
// const MyContext=React.createContext()

export default class A extends Component {
    state={
        username: 'tom',
        age: 18,
    }

    render() {
        const {username, age}=this.state
        return (
            <div>
                <h3>i am A</h3>
                <h4>my username is {username}</h4>
                {/* double quotes, first for js, second for obj */}
                <UserContext.Provider value={{username:username, age:age}}> 
                {/* in this way, B and its children will all receive username */}
                <B  />
                </UserContext.Provider>
            </div>
        )
    }

}

class B extends Component {
   static contextType=UserContext
    render() {
        console.log("from B",this.context)
        const {username}=this.context
        return (
            <div>
                <h3>i am B</h3>
                <h4>my username i get from A is {username}</h4>
                <C/>
            </div>
        )
    }
}
// class C extends Component {
//     static contextType=MyContext
    
//     render() {
//         console.log("this.context from c",this.context)
//         const {username,age}=this.context
//         return (
//             <div>
//                 <h3>i am C</h3>
//                 <h4>my username i get from A is {username}</h4>
//                 <h4>my age i get from A is {age}</h4>
//             </div>
//         )
//     }
// }

// const C=()=>{
//     // render() {
//         //const {username,age}=this.context
//         const value = useContext(UserContext)
//         return (
//             <div>
//                 <h3>i am C</h3>
//                 <h4>my username i get from A is {value.username}, my age i get from A is {value.age}
//                 {/* <UserContext.Consumer> */}
//                     {
//                         // value=>{
//                         //     return ` ${value.username}, my age i get from A is ${value.age}`
//                         // }
//                         value=>` ${value.username}, my age i get from A is ${value.age}`
//                     }
//                 {/* </UserContext.Consumer> */}
//                 </h4>
//             </div>
//         )
//     // }
// }
