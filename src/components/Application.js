import { useState } from "react";
import axios from "axios"



export const Application  = ({name}) => {
    const [status, setStatus] = useState(undefined)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = () => {
        axios.post('https://5050-nkestudents-backend4321-dkm8rvf4aoi.ws-eu86.gitpod.io/auth/', {
            email,
            password
        }).then((response) => setStatus(response.data))
    }
    return (
        <div>
            {!status ? (
                <div>
                    Authentification
                    Email: <input onChange={(e) => setEmail(e.target.value)}/>
                    Password: <input onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={auth}>Auth</button>
                </div>
                
            ): <div>{JSON.stringify(status, null,2)}</div> }
        </div>
    )
}