import axios from "axios"
import { readable } from "svelte/store"

export const userStoredValue = readable(null, (set: any) => {
    let user

    const req = async () => {
        const res = await axios.get(`http://localhost:8080/user/me`, { withCredentials: true })

        set(res.data)
    }    

    req()
})