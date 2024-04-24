import { PUBLIC_API_URL } from '$env/static/public';
import axios from "axios"
import { guild } from '../../../../store/guild.js';
import { goto } from '$app/navigation';

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

	const { data: guildData } = await axios.get(`${PUBLIC_API_URL}/guilds/guild`, {
		headers: {
			"Cookie": `session.id="${SessionCookie}"`,
			guildId: params.guildId,
		},
		
	})

	if (guildData) {
		guild.set(guildData)
	} else {
		goto('/dashboard/guilds')
	}

	return guildData
}