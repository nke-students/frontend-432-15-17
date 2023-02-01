import { useState } from "react";
const users = ['Boba','Sele','ddddd']
export const Aplication  = ({name}) => {
    const [count, setCount] = useState(0);
    const [userName, setUsername] = useState('')
    return (<div>
        <div>Count: {count}</div>
        <div>Name: {userName}</div>
        <button onClick={() => setCount((count) => count + 1)}>Add</button>
        <button onClick={() => setCount((count) => count - 1)}>Remove</button>
        <input onChange={(event) => setUsername(event.target.value)}/>

        <div>
            {users.map(item => (<div>Username: {item}</div>))}
        </div>
        </div>)
}