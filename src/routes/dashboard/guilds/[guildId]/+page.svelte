<script lang="ts">
    import Icon from "@iconify/svelte";

    export let data;

    const growth = 0
</script>

<svelte:head>
    <title>Planos - Jake</title>

    <meta property="og:type" content="website" />
    <meta
        property="og:url"
        content={`https://jakebot.com.br/dashboard/guilds/${data.database._id}`}
    />
    <meta property="og:title" content={`Configurar ${data.database.name}`} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta
        property="twitter:url"
        content={`https://jakebot.com.br/dashboard/guilds/${data.database._id}`}
    />
    <meta
        property="twitter:title"
        content={`Configurar ${data.database.name}`}
    />
</svelte:head>

<div
    class="container mx-[40px] my-[20px] flex items-center justify-center flex-col"
>
    <div class="header flex flex-row items-center justify-between w-[90%]">
        <div class="content flex flex-row items-center">
            <div
                class="icon flex relative w-[100px] h-[100px] items-center justify-center"
            >
                {#if data.database.images.icon}
                    <img
                        src={`https://cdn.discordapp.com/icons/${data.database._id}/${data.database.images.icon}.png?size=2048`}
                        alt="Icone do servidor"
                        class="w-[90px] h-[90px] rounded-full"
                    />
                {:else}
                    <Icon icon="teenyicons:users-solid" width="30px" />
                {/if}
                <span
                    class={`absolute w-[100px] h-[100px] rounded-full border-solid border-[3px] border-primary`}
                />
            </div>

            <div class="info mx-[20px]">
                <h1 class="text-[30px] font-semibold text-primary">
                    {data.database.name}
                </h1>
                <p>{data.database._id}</p>
            </div>
        </div>

        <div class="actions flex flex-row items-center justify-center">
            <button class="flex items-center justify-center bg-[#3e95ff] px-[20px] py-[10px] rounded-md mx-[6px]">
                <p class="text-white text-[14px] font-medium">Upgrade</p>
                <!-- <Icon icon="streamline:diamond-2-solid" class="ml-[5px]" color="#2688ff"/> -->
            </button>
            
            <button class="flex items-center justify-center bg-[#ff3737] px-[20px] py-[10px] rounded-md mx-[6px]">
                <p class="text-white text-[14px] font-medium">Remover</p>
                <!-- <Icon icon="pepicons-pop:leave-circle-filled" class="ml-[5px]" color="#b30000"/> -->
            </button>
        </div>
    </div>
    <hr class="w-[90%] border-solid border-[#bdbdbd] my-[20px]" />
    <div class="content">
        <div class="users-analytics-box">
            <div class="data-container flex flex-row">
                <div class="box bg-[#96969627] relative w-[220px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md">
                    <Icon icon="octicon:question-16" class="absolute top-[10px] right-[10px]" />

                    <p>Usuários</p>

                    <div class="flex flex-row items-baseline">
                        <p class="text-[40px]">{data.discord.approximate_member_count}</p>
                    </div>
                </div>

                <div class="box bg-[#96969627] relative w-[220px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md">
                    <Icon icon="octicon:question-16" class="absolute top-[10px] right-[10px]" />

                    <p>Canais</p>

                    <div class="flex flex-row items-baseline">
                        <p class="text-[40px]">43</p>
                    </div>
                </div>

                <div class="box bg-[#96969627] relative w-[220px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md">
                    <Icon icon="octicon:question-16" class="absolute top-[10px] right-[10px]" />
                    <Icon icon="fa6-solid:gear" color="#3db5ff" class="absolute bottom-[10px] right-[10px]"/>

                    <p>Crescimento</p>

                    <div class="flex flex-row items-center">
                        <span class="mr-[5px]">
                            {#if growth == parseFloat("0")}
                                <Icon icon="pepicons-pop:line-x" color="#3e95ff" />
                            {:else if growth < 0}
                                <Icon icon="bxs:down-arrow" color="#ff1212"/>
                            {:else if growth > 0}
                                <Icon icon="bxs:up-arrow" color="#5aa900" />
                            {/if}
                        </span>
                        <span class="flex flex-row items-baseline">
                            <p class="text-[40px]">{ growth }</p>
                            <span>%</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="chart bg-[#96969627] flex items-center justify-center m-[20px] rounded-lg w-auto h-[300px]">
                <p>Em desenvolvimento</p>
            </div>
        </div>
    </div>
    <hr class="w-[90%] border-solid border-[#bdbdbd] my-[20px]" />
</div>