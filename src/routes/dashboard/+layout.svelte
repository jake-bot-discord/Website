<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import axios from "axios";
    import { PUBLIC_API_URL } from "$env/static/public"
    import DashNav from "$lib/components/DashNav.svelte";

    /**
     * @type {null}
     */
    let _user

    onMount(async () => {
        try {
            const {data: sessionData} = await axios.get(`${PUBLIC_API_URL}/auth/session`, { withCredentials: true })

            if (!sessionData) return goto("/")
        } catch(err) {
            return goto("/")
        }
    })
</script>

<div class="page flex flex-row px-[10px] items-start">
    <DashNav />
    <slot />
</div>
