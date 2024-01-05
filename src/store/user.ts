import axios from "axios"
import { readable } from "svelte/store"
import { PUBLIC_API_URL } from "$env/static/public"

export const userStoredValue = readable(null, (set: any) => {
    let user

    const req = async () => {
        const res = await axios.get(`${PUBLIC_API_URL}/auth/status`, { withCredentials: true })

        set(res.data)
    }    

    req()
})