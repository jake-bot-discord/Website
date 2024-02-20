import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import axios from "axios"

export async function load({ params }) {

	const { data: guildData } = await axios.get(`${PUBLIC_API_URL}/guilds/guild`, {
		headers: {
			guildId: params.guildId
		}
	})

	return guildData
}