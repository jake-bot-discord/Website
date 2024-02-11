<svelte:head>
    <title>Servidores - Jake</title>
</svelte:head>

<script>
    import { goto } from "$app/navigation";

    // const urlParams = new URLSearchParams(window.location.search);
    import { page } from "$app/stores"
    import { PUBLIC_API_URL } from "$env/static/public";
    import Icon from "@iconify/svelte";
    import axios from "axios";

    const path = $page.url.pathname.split("/")
    console.log(path[2])

    const logout = async () => {
        try {
            await axios.get(`${PUBLIC_API_URL}/auth/logout`, { withCredentials: true })
    
            goto("/")
            
            return location.reload()
        } catch(err) {
            console.log(err)
        }
    }
</script>

<nav class="flex flex-col items-start px-[10px] w-[200px] p-[20px]">
    <p class="font-semibold text-[12px] text-[#9b9b9b] m-[4px]">DASHBOARD</p>
    <hr class="w-[90%] mb-[10px] mx-[4px] border-[#bdbdbd] border-solid rounded-full">
    <ul class="flex flex-col items-start justify-center">
        <li class="group relative flex justify-center items-center">
            <span class={`opacity-0 nav_indicator group-hover:opacity-100 group-hover:duration-[.8s]`} />
            <button on:click={() => { goto("/dashboard/guilds") }} class="flex flex-row justify-center items-center">
                <Icon icon="solar:user-bold" color="#9e9e9e" height="20px" class="mr-[8px]"/> 
                <p>Servidores</p>
            </button>
        </li>
        <li class="group relative flex justify-center items-center">
            <span class={`opacity-0 nav_indicator group-hover:opacity-100 group-hover:duration-[.8s]`} />
            <button on:click={() => { goto("/dashboard/preferences") }} class="flex flex-row justify-center items-center">
                <Icon icon="ion:card" color="#9e9e9e" height="20px" class="mr-[8px]"/> 
                <p>Assinatura</p>
            </button>
        </li>
        <li class="group relative flex justify-center items-center">
            <span class={`opacity-0 nav_indicator group-hover:opacity-100 group-hover:duration-[.8s]`} />
            <button on:click={() => { goto("/dashboard/preferences") }} class="flex flex-row justify-center items-center">
                <Icon icon="mdi:gear" color="#9e9e9e" height="20px" class="mr-[8px]"/> 
                <p>Preferencias</p>
            </button>
        </li>
        <li class="group relative flex justify-center items-center">
            <span class={`opacity-0 nav_indicator group-hover:opacity-100 group-hover:duration-[.8s]`} />
            <button on:click={logout} class="flex flex-row justify-center items-center">
                <Icon icon="uis:signout" color="#ff1212" height="20px" class="mr-[8px]"/>
                <p class="text-highlite-red">Sair</p>            
            </button>
        </li>
    </ul>

</nav>

<style lang="scss">
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 3px 0;
    }

    span {
        display: flex;
        width: 3px;
        height: 20px;
        background-color: #fc9304;
        margin-right: 6px;
        border-radius: 3px;
        position: absolute;
        left: -10px;
    }
</style>