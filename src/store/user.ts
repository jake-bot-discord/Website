import axios from "axios"
import { readable } from "svelte/store"
import { PUBLIC_API_URL } from "$env/static/public"

export const userStoredValue = readable(null, (set: any) => {
    let user

    const req = async () => {
        try {
            const res = await axios.get(`${PUBLIC_API_URL}/auth/session`, { withCredentials: true })
    
    
            set(res.data.updatedUserData)
        } catch(err) {
            console.log("Houve um erro ao pegar a session", err)
        }
    }    

    req()
})