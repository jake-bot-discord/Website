<script>
    import Icon from "@iconify/svelte";

    export let data;
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
    class="container mx-[80px] my-[20px] flex items-center justify-center flex-col"
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
                    class={`absolute w-[100px] h-[100px] rounded-full border-solid border-[3px] border-primary-2`}
                />
            </div>

            <div class="info mx-[20px]">
                <h1 class="text-[30px] font-semibold text-primary-2">
                    {data.database.name}
                </h1>
                <p>{data.database._id}</p>
            </div>
        </div>

        <div class="actions">
            <button class="flex px-[20px] py-[10px] bg-highlite-red rounded-md">
                <p class="text-white text-[16px] font-semibold">Remover</p>
            </button>
        </div>
    </div>
    <hr class="w-[90%] border-solid border-[#bdbdbd] my-[20px]" />
    <div class="content">
        <div class="users-analytics-box">
            <div class="data-container flex flex-row">
                <div
                    class="box bg-[#bdbdbd27] relative w-[180px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md"
                >
                    <Icon
                        icon="octicon:question-16"
                        class="absolute top-[10px] right-[10px]"
                    />
                    <p>Usuários</p>
                    <div class="flex flex-row items-baseline">
                        <p class="text-[40px]">890</p>
                    </div>
                </div>

                <div
                    class="box bg-[#bdbdbd27] relative w-[180px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md"
                >
                    <Icon
                        icon="octicon:question-16"
                        class="absolute top-[10px] right-[10px]"
                    />
                    <p>Canais</p>
                    <div class="flex flex-row items-baseline">
                        <p class="text-[40px]">43</p>
                    </div>
                </div>

                <div
                    class="box bg-[#bdbdbd27] relative w-[180px] h-[100px] mx-[20px] my-[10px] flex flex-col justify-center p-[20px] rounded-md"
                >
                    <Icon
                        icon="octicon:question-16"
                        class="absolute top-[10px] right-[10px]"
                    />
                    <p>Crescimento</p>
                    <div class="flex flex-row items-center">
                        <span class="mr-[5px]">
                            <!-- <Icon icon="bxs:down-arrow" color="#ff1212"/> -->
                            <Icon icon="bxs:up-arrow" color="#5aa900" />
                        </span>
                        <span class="flex flex-row items-baseline">
                            <p class="text-[40px]">2.5</p>
                            <span>%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
