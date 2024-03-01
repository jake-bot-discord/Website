<script lang="ts">
    import Icon from "@iconify/svelte";
    import { PUBLIC_API_URL, PUBLIC_WEB_URL, PUBLIC_CDN_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import { userStoredValue } from "../../store/user";
    import { goto } from "$app/navigation";
    
    export let vipData: any

    let benefitsArray = vipData[1].benefits
    let hiddenBenefitsArray = vipData[1].hidden_benefits

    let viewBenefits = false
    let viewGiftDuration = false

    const toggleBenefits = () => {
        viewBenefits = !viewBenefits
    } 

    let userData: any

    onMount(async () => {
        userStoredValue.subscribe(user => {
            userData = user
        })
    })

    const handleOpenGiftsDuration = () => {
        viewGiftDuration = true
        
        document.body.addEventListener('click', handleCloseGiftsDuration)
    }

    const handleCloseGiftsDuration = () => {
        viewGiftDuration = false
        
        document.body.removeEventListener('click', handleCloseGiftsDuration)
    }
</script>

<div class={`vip-card flex flex-col items-center justify-center w-[280px] md:w-[250px] p-[20px] m-[20px] md:m-[20px] rounded-[20px]`} style={`background-color: ${vipData[1].color}20; border-width: 2px; border-color: ${vipData[1].color}; border-style: solid`}>
    <div class="header flex flex-row items-center justify-start w-[100%]">
        <div class="icon md:w-[84px] w-[50px] m-[10px]">
            <img src={`${PUBLIC_CDN_URL}/default/vips/${vipData[1].name.toLowerCase()}.png`} alt="Vip icon" class="w-[80px] md:w-[54px] m-auto" />
        </div>
        
        <div class="text w-[150px]">
            <h1 class="text-[26px] md:text-[26px] font-medium" style={`color: ${vipData[1].color};`}> { vipData[1].name } </h1>
        
            <p class="text-[18px]" style={`color: ${vipData[1].color};`}> { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(vipData[1].price) } <span class="text-theme-light-text dark:text-theme-dark-text text-[10px]">/mês</span> </p>
        </div>
    </div>

    <div class="benefits mt-[10px] mb-[5px]">
        <div class="default">
            <ul>
                {#each benefitsArray as benefits}
                    <li class="flex flex-row items-center justify-start">
                        <Icon icon="fluent-emoji-high-contrast:multiply" width="8px" color={vipData[1].color} class="mr-[4px]"/>
                        
                        <p>{benefits}</p>
                    </li>
                {/each}
            </ul>
        </div>
    
        <div class={`hidden-benefits ${viewBenefits ? "flex" : "hidden"} animate-fade duration-200`}>
            <ul>
                {#each hiddenBenefitsArray as benefits}
                    <li class="flex flex-row items-center justify-start">
                        <Icon icon="carbon:dot-mark" width="10px" color={vipData[1].color} class="mr-[4px]"/>
                        
                        <p>{benefits}</p>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="actions flex flex-col items-center justify-center">
        <button class="benefits-action flex flex-row items-center justify-center m-[5px]" on:click={toggleBenefits}>
            <Icon icon="ic:round-play-arrow" class={`${viewBenefits ? "-rotate-90" : "rotate-90"} duration-300 mr-[2px]`} color={vipData[1].color}/>

            <p> {viewBenefits ? "Ver menos" : "Ver mais"} </p>
        </button>

        <div class="purchase-button flex items-center justify-center m-[5px]">

            <!-- {#if !userData}
                <button  class="w-[120px] h-[40px] rounded-md m-[2px] flex items-center justify-center" style={`background-color: ${vipData[1].color};`}>
                    <a href={`${PUBLIC_API_URL}/auth/login`}>
                        <p class="text-white font-medium">Login</p>
                    </a>
                </button>
            {:else} -->
                <button on:click={() => goto(`/api/payments/signature/create?vip=${vipData[0]}`)} class="w-[120px] h-[40px] rounded-md m-[2px] flex items-center justify-center" style={`background-color: ${vipData[1].color};`}>
                    <p class="text-white font-medium">Assinar</p>
                </button>

                <div class="gift-box relative">
                    <button on:click|stopPropagation={!viewGiftDuration ? handleOpenGiftsDuration : handleCloseGiftsDuration } class="w-[40px] h-[40px] rounded-md m-[2px] flex items-center justify-center" style={`background-color: ${vipData[1].color};`}>
                        <Icon icon="ion:gift" width="20px" color="#fff"/>
                    </button>

                    <div aria-hidden="true" on:click|stopPropagation={() => {}} class={`gift-duration absolute w-[130px] h-[140px] ${viewGiftDuration ? "flex" : "hidden"} items-center justify-center top-[50px]  bg-theme-light-background dark:bg-theme-dark-background border-solid border-[2px] rounded-b-[16px] rounded-tr-[16px] rounded-tl-md z-10`} style={`border-color: ${vipData[1].color};`}>
                        <ul>
                            <li class="group relative flex items-center justify-start m-[8px]">
                                <span class="absolute w-[4px] h-[20px] left-[-10px] rounded-full opacity-0 group-hover:opacity-100 duration-200" style={`background-color: ${vipData[1].color};`} />

                                <button on:click={() => goto(`/api/payments/gift/create?vip=${vipData[0]}&duration=1`)}>
                                    <p>
                                        <span style={`color: ${vipData[1].color};`}>1</span> mês
                                    </p>
                                </button>
                            </li>
                            <hr style={`border-color: ${vipData[1].color};`}>
                            <li class="group relative flex items-center justify-start m-[8px]">
                                <span class="absolute w-[4px] h-[20px] left-[-10px] rounded-full opacity-0 group-hover:opacity-100 duration-200" style={`background-color: ${vipData[1].color};`} />

                                <button on:click={() => goto(`/api/payments/gift/create?vip=${vipData[0]}&duration=3`)}>
                                    <p>
                                        <span style={`color: ${vipData[1].color};`}>3</span> mêses
                                    </p>
                                </button>
                            </li>
                            <hr style={`border-color: ${vipData[1].color};`}>
                            <li class="group relative flex items-center justify-start m-[8px]">
                                <span class="absolute w-[4px] h-[20px] left-[-10px] rounded-full opacity-0 group-hover:opacity-100 duration-200" style={`background-color: ${vipData[1].color};`} />

                                <button on:click={() => goto(`/api/payments/gift/create?vip=${vipData[0]}&duration=12`)}>
                                    <p>
                                        <span style={`color: ${vipData[1].color};`}>12</span> mêses
                                    </p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            <!-- {/if} -->
        </div>
    </div>
</div>