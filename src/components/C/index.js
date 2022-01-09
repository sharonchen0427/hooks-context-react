import {useContext} from 'react'
import {UserContext} from '../../contexts/UserContext'

export default function C(){
    // render() {
        //const {username,age}=this.context
        const value = useContext(UserContext)
        return (
            <div>
                <h3>i am C</h3>
                <h4>**in C :My username i get from A is {value.username}, my age i get from A is {value.age}
                {/* <UserContext.Consumer> */}
                    {
                        // value=>{
                        //     return ` ${value.username}, my age i get from A is ${value.age}`
                        // }
                        value=>` ${value.username}, my age i get from A is ${value.age}`
                    }
                {/* </UserContext.Consumer> */}
                </h4>
            </div>
        )
    // }
}