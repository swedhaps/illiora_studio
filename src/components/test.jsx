// // state and props

// function App(){
//     return < User name="John" />
// }

// function User(props){
//     return <h1>hello {props.name}</h1>
// }

// useState

// import { useState } from "react"
// function Counter(){
//     const [ count, setCount ] = useState(0)

//     function increment(){
//         setCount(count + 1)
//     }
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// }

// import { useEffect} from "react"
// function APP(){
//     useEffect(() => {
//         console.log("Component mounted")
//         return () => {
//             console.log("Component unmounted")
//         }
//     })
// }