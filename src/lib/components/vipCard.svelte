<script>
    import Icon from "@iconify/svelte"
    import { onMount } from "svelte";
    import { userStoredValue } from "../../store/user"
    import { PUBLIC_API_URL } from "$env/static/public";
    import { createEventDispatcher } from "svelte";
    
    export let color = ""
    export let isCardOpen = false 
    
    const dispatch = createEventDispatcher()
    
    const handleOpenCard = () => {
        isCardOpen ? isCardOpen = false : isCardOpen = true          
    }

    const showModalFunction = () => {
        dispatch('open')
    }

    const setVipType = () => {
        dispatch('vipType')
    }

    /**
     * @type {any}
     */
    let _user

    onMount(() => {
        return  userStoredValue.subscribe(user => {
            _user = user
        })
    })

</script>

<div class="vip-card flex flex-col justify-center w-[280px] md:w-[250px] p-[30px] m-[20px] md:m-[20px] rounded-[20px]" style={`background-color: ${color}20; border-width: 2px; border-color: ${color}; border-style: solid`}>
    <div class="vip-header flex flex-row justify-between w-[100%]">
        <div class="icon w-[90px]">
            <slot name="image"></slot>
        </div>
        <div class="text w-[130px]">
            <slot name="name"></slot>
            <slot name="price"></slot>
        </div>
    </div>
    <div class="vip-benefits my-[20px]">
        <div class="visible-features">
            <slot name="visible-features"></slot>
        </div>

        <div class={`hidden-features ${!isCardOpen ? "hidden" : ""}`}>
            <slot name="hidden-features"></slot>
        </div>
    </div>
    <div class="buttons flex flex-col w-[100%] items-center justify-center">
        <!-- {#if _user} -->
            <button on:click|stopPropagation={() => {setVipType(), showModalFunction()}} class="purchase-button flex w-[110px] h-[50px] items-center justify-center p-[10px] px-[20px] rounded-[8px] mb-[20px] active:grayscale-[30%] duration-100 hover:w-[120px] hover:duration-150" style={`background-color: ${color}`}>
                <p class="text-[#fff] font-medium">Comprar</p>
            </button>
        <!-- {:else}
            <button class="login-button flex w-[110px] h-[50px] items-center justify-center p-[10px] px-[20px] rounded-[8px] mb-[20px] active:grayscale-[30%] duration-100 hover:w-[120px] hover:duration-150" style={`background-color: ${color}`}>
                <a href={`${PUBLIC_API_URL}/auth/login`}>
                    <p class="text-[#fff] font-medium">Login</p>
                </a>
            </button>
        {/if} -->

        <button on:click|stopPropagation={handleOpenCard} class={`expand ${!isCardOpen ? "flex" : "hidden"} flex-row justify-center items-center relative`}>
            <p class="text-[14px]">Ver mais</p> <Icon icon="eva:arrow-down-fill" color={color} height="25px" />
        </button>

        <button on:click|stopPropagation={handleOpenCard} class={`expand ${isCardOpen ? "flex" : "hidden"} flex-row justify-center items-center relative`}>
            <p class="text-[14px]">Ver menos</p> <Icon icon="eva:arrow-up-fill" color={color} height="25px" />
        </button>
    </div>
</div>