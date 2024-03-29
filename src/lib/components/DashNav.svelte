<svelte:head>
    <title>Servidores - Jake</title>
</svelte:head>

<script>
// @ts-nocheck

    import { goto } from "$app/navigation";
    import { page } from "$app/stores"
    import { PUBLIC_API_URL } from "$env/static/public";
    import Icon from "@iconify/svelte";
    import axios from "axios";
    import NavSectionDrop from "./NavSectionDrop.svelte";

    const path = $page.url.pathname.split("/")

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

<nav class="flex flex-col items-start my-[20px] w-[200px] cursor-default">
    <div class="box w-full">
        <p class="font-semibold text-[12px] text-[#9b9b9b] m-[4px]">DASHBOARD</p>
        <hr class="w-[90%] mb-[4px] mx-[4px] border-[#bdbdbd] border-solid rounded-full">
        <ul class="flex flex-col items-start justify-center">
            <li class="group relative flex justify-center items-center">
                <span class={`nav_indicator opacity-0 group-hover:opacity-100 group-hover:duration-[.8s]`} />
                <button on:click={() => { goto("/dashboard/guilds") }} class="flex flex-row justify-center items-center">
                    <Icon icon="solar:user-bold" color="#9e9e9e" height="16px" class="mr-[4px]"/> 
                    <p class="text-[15px]">Servidores</p>
                </button>
            </li>
            <li class="group relative flex justify-center items-center">
                <span class={`nav_indicator opacity-0 group-hover:opacity-100 group-hover:duration-[.8s]`} />
                <button on:click={() => { goto("/dashboard/config/customer/billing") }} class="flex flex-row justify-center items-center">
                    <Icon icon="ion:card" color="#9e9e9e" height="16px" class="mr-[4px]"/> 
                    <p class="text-[15px]">Assinatura</p>
                </button>
            </li>
            <li class="group relative flex justify-center items-center">
                <span class={`nav_indicator opacity-0 group-hover:opacity-100 group-hover:duration-[.8s]`} />
                <button on:click={() => { goto("/dashboard/preferences") }} class="flex flex-row justify-center items-center">
                    <Icon icon="mdi:gear" color="#9e9e9e" height="16px" class="mr-[4px]"/> 
                    <p class="text-[15px]">Preferencias</p>
                </button>
            </li>
            <li class="group relative flex justify-center items-center">
                <span class={`nav_indicator opacity-0 group-hover:opacity-100 group-hover:duration-[.8s]`} />
                <button on:click={logout} class="flex flex-row justify-center items-center">
                    <Icon icon="uis:signout" color="#ff1212" height="16px" class="mr-[4px]"/>
                    <p class="text-highlite-red">Sair</p>            
                </button>
            </li>
        </ul>
    </div>

    {#if path[3] && !isNaN(path[3])}
        <div class="box w-full my-[20px]">
            <p class="font-semibold text-[12px] text-[#9b9b9b] m-[4px]">SERVIDOR</p>
            <hr class="w-[90%] mb-[4px] mx-[4px] border-[#bdbdbd] border-solid rounded-full">
            <ul class="flex flex-col items-start justify-start">
                <NavSectionDrop>
                    <p slot="section-name">Segurança</p>

                    <ul slot="section-list" class="flex relative flex-col items-start before:w-[2px] before:h-full before:dark:bg-[#9e9e9e25] before:bg-[#9e9e9e6b] before:absolute before:left-[8px] before:rounded-full animate-slideTop duration-300">
                        <li>
                            <button>
                                <p class="text-[15px] ml-[20px]">Automod</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p class="text-[15px] ml-[20px]">Banimentos</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p class="text-[15px] ml-[20px]">Expulsões</p>
                            </button>
                        </li>
                        <li>
                            <button>
                                <p class="text-[15px] ml-[20px]">Castigo</p>
                            </button>
                        </li>
                    </ul>
                </NavSectionDrop>
            </ul>
        </div>
    {/if}
</nav>

<style lang="scss">
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 2px 0;
    }

    .nav_indicator {
        display: flex;
        width: 3px;
        height: 20px;
        background-color: #fc9304;
        margin-right: 6px;
        border-radius: 3px;
        position: absolute;
        left: -6px;
    }
</style>