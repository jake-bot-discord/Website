import axios from "axios"
import { readable } from "svelte/store"
import { env } from "$lib/env"

export const userStoredValue = readable(null, (set: any) => {
    let user

    const req = async () => {
        const res = await axios.get(`${env.VITE_API_URL}/user/me`, { withCredentials: true })

        set(res.data)
    }    

    req()
})