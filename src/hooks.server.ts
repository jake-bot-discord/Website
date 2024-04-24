import axios from "axios"
import { PUBLIC_API_URL } from "$env/static/public"

export async function handle({event, resolve}: any) {
    const route = event.url.pathname
    
    if ( route == "/dashboard" ) return new Response(null, {
        status: 302,
        headers: {
            "Location": "/dashboard/guilds"
        }
    })

    return await resolve(event)
}