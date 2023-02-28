import axios from "axios"
import { useState,useEffect } from "react"

export const Profile = ({token}) => {
    const [user, setUser] = useState(undefined)
    useEffect(() =>{
        axios.get('https://5050-nkestudents-backend4321-dkm8rvf4aoi.ws-eu88.gitpod.io/me/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => setUser(response.data))},
        [token]
        )
        localStorage.setItem('token', token);
        return (
           <div>
            <div>User: {JSON.stringify(user)}</div>
            token:  {localStorage.getItem('token')}
           </div> 
        )
}