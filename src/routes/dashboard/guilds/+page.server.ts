import { PUBLIC_API_URL } from '$env/static/public';
import axios from "axios"
import { goto } from '$app/navigation';
import type { PartialGuild } from '../../../types/guild.js';

function sort(a: PartialGuild, b: PartialGuild) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
}

export async function load({ params, cookies }) {
    const SessionCookie = cookies.get("session.id")

    if (!SessionCookie) {
        return goto("/")
    }
    
    const res = await axios.request({ 
        url: `${PUBLIC_API_URL}/auth/session`,
        method: "GET",
        headers: {
            "Cookie": `session.id="${SessionCookie}"`
        }
    })

    if (!res.data) {
        return goto("/")
    }

    const { data: userResponse } = await axios.get<PartialGuild[]>(
        `${PUBLIC_API_URL}/guilds/customer`,
        { 
            headers: {
                "Cookie": `session.id="${SessionCookie}"`
            },
        
            withCredentials: true 
        },
    );

    const { data: botResponse } = await axios.get<PartialGuild[]>(
        `${PUBLIC_API_URL}/guilds/bot`,
        { 
            headers: {
                "Cookie": `session.id="${SessionCookie}"`
            },
        
            withCredentials: true 
        },
    );

    const userGuilds = userResponse.filter(
        (guild) =>
            (BigInt(guild.permissions) & BigInt(0x8)) == BigInt(0x8),
    ).sort(sort)

    const response = {
        userGuilds: userGuilds,
        botGuilds: botResponse
    }

    return response
}