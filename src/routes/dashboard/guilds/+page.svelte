<script>
    import { PUBLIC_DISCORD_INVITE_URL } from "$env/static/public";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";

    import NotFound from "$lib/assets/not-found.svg"

    /**
     * @type {{ userGuilds: string | any[]; botGuilds: any[]; }}
     */
    export let data
</script>

<div class="container flex flex-col mx-[40px] my-[20px] mb-[100px] w-[100%]">
    <div class="page-header w-[100%] px-[40px]">
        <div class="flex flex-row justify-between items-center">
            <h1 class="text-primary font-medium text-[30px]">Servidores</h1>
        </div>

        <hr class="flex w-[100%] border-[#bdbdbd] border-solid rounded-full my-[10px]" />
    </div>
    <div class="guilds-container flex flex-wrap items-center justify-center">
        {#if data && data.userGuilds && data.userGuilds.length > 0}
            {#each data.userGuilds as guild}
                    <div class="guild-box flex flex-col h-[150px] m-[14px] px-[12px] py-[12px] justify-between rounded-[30px] bg-[#9c9c9c1f]">
                        <div class="infos flex flex-row">
                            <div class="icon flex relative w-[70px] h-[70px] items-center justify-center">
                                {#if guild.icon}
                                    <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`} alt="Icone do servidor" class="w-[60px] h-[60px] rounded-full">
                                {:else}
                                    <Icon icon="teenyicons:users-solid" width="30px" color={`${data.botGuilds.find((/** @type {{ id: any; }} */ obj) => obj.id == guild.id) ? "#fc9304" : "#3080ff"}`}/>
                                {/if}
                                <span class={`absolute w-[70px] h-[70px] rounded-full border-solid border-[3px] ${data.botGuilds.find((/** @type {{ id: any; }} */ obj) => obj.id == guild.id) ? "border-primary" : "border-[#3080ff]"}`}/>
                            </div>

                            <div class="infos flex flex-col justify-start w-[180px] ml-[20px]">
                                <h1 class={`${data.botGuilds.find((/** @type {{ id: any; }} */ obj) => obj.id == guild.id) ? "text-primary" : "text-[#3080ff]"} text-[20px] font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[160px]`}>{guild.name}</h1>
                                <hr class="w-[90%]">
                                <p class="text-[12px] w-[130px]">{guild.id}</p>
                            </div>
                        </div>

                        <div class="actions flex items-center justify-between my-[10px]">
                            <div class="icon flex w-[70px] items-center justify-center">
                                {#if data.botGuilds.find((/** @type {{ id: any; }} */ obj) => obj.id == guild.id)}
                                    {#if guild.owner}
                                        <Icon icon="streamline:crown-solid" width="16px" color="#fca503"/>
                                    {:else}
                                        <Icon icon="fa6-solid:gear" width="16px" color="#0384fc"/>
                                    {/if}
                                {:else} 
                                    <Icon icon="mingcute:warning-fill" width="20px" color="#fc3923"/>
                                {/if}
                            </div>
                            <div class="buttons mx-[10px]">
                                {#if !data.botGuilds.find((/** @type {{ id: any; }} */ obj) => obj.id == guild.id)}
                                    <button on:click={() => {window.location.href = `${PUBLIC_DISCORD_INVITE_URL}&guild_id=${guild.id}&disable_guild_select=true`}} class="flex items-center justify-center px-[12px] py-[6px] bg-[#3080ff] rounded-md">
                                        <p class="text-white text-[14px]">Adicionar</p>
                                    </button>
                                {:else}
                                    <button on:click={() => goto(`/dashboard/guilds/${guild.id}`)} class="flex items-center justify-center px-[12px] py-[6px] bg-primary rounded-md">
                                        <p class="text-white text-[14px]">Configurar</p>
                                    </button>
                                {/if}
                            </div>
                        </div>
                    </div>
            {/each}
        {:else}
            <div class="not-found-box flex items-center justify-center">
                <div class="img">
                    <img src={NotFound} alt="Not found" class="w-[400px] h-[400px]">
                </div>
                
                <div class="infos flex items-center justify-center flex-col">
                    <h1 class="text-[28px] text-primary font-semibold">Nenhum servidor encontrado!</h1>
                    
                    <p class="m-[10px]">Que tal tentar recarregar a pagina?</p>
                    
                    <button on:click={() => location.reload()} class="py-[10px] px-[20px] m-[10px] bg-primary rounded-md flex items-center justify-center flex-row">
                        <p class="text-[16px] font-medium">Recarregar</p>

                        <Icon icon="pepicons-pop:reload" class="m-[5px]" width="16px"/>
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>