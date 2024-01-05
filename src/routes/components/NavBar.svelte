<script>
    import { onMount } from "svelte";
    import { userStoredValue } from "../../store/user"
    
    //imagens
    import Logo from "$lib/assets/jake-logo.png"
    
    //icones
    import Profile from "$lib/icons/profile.svg"
    import Logout from "$lib/icons/logout.svg"
    import Dashboard from "$lib/icons/dashboard.svg"
    import OpenMenu from "$lib/icons/menu.svg"
    import CloseMenu from "$lib/icons/close.svg"
    import Document from "$lib/icons/docs.svg"
    import Moeda from "$lib/icons/moeda.svg"
    import Suporte from "$lib/icons/suporte.svg"
    import Login from "$lib/icons/login.svg"

    /**
     * @type {any}
     */
    let _user

    onMount(() => {
        return  userStoredValue.subscribe(user => {
            _user = user
        })
    })

    export let isMenuOpen = false

    const handleMenuOpen = () => {
        isMenuOpen = true

        console.log("open")
        
        document.body.addEventListener('click', handleMenuClose)
    }

    const handleMenuClose = () => {
		isMenuOpen = false
        
        console.log("close")
		
        document.body.removeEventListener('click', handleMenuClose)
	}

    export let isNavOpen = false 

    const handleNavOpen = () => {
        isNavOpen = true

        console.log("open")
        
        document.body.addEventListener('click', handleNavClose)
    }

    const handleNavClose = () => {
		isNavOpen = false
        
        console.log("close")
		
        document.body.removeEventListener('click', handleNavClose)
	}
</script>

<nav class="flex flex-row justify-between items-center px-[10px]">
    <div class="box bg-purple-100 w-[70px] flex justify-center items-center">
        <a href="/">
            <img src={ Logo } alt="logo" class="w-[100px] md:w-[70px]">
        </a>
    </div>

    <div class="box hidden md:flex">
        <ul class="flex flex-row">
            <li class="flex items-center justify-center relative mx-[15px] text-[16px] group cursor-pointer">
                <p> Suporte </p>
                <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
            </li>
            <li class="flex items-center justify-center relative mx-[15px] text-[16px] group cursor-pointer">
                <p> Documentação </p>
                <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
            </li>
            <li class="flex items-center justify-center relative mx-[15px] text-[16px] group cursor-pointer">
                <p> Planos </p>
                <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
            </li>
        </ul>
    </div>

    <div class="box hidden md:flex">
        {#if !_user}
            <button class="flex justify-center items-center w-[80px] h-[45px] bg-primary-2 rounded-lg active:grayscale-[10%] hover:bg-[#e39b00] duration-500">
                <a href="http://localhost:8080/auth/login">
                    <p class="text-[#fff] font-medium text-[15px]">Login</p>
                </a>
            </button>
        {:else}
            <div class="user-box relative">
                <span class="flex justify-center items-center rounded-full border-primary-2 border-[3px] w-[62px] h-[62px]">
                    <button on:click|stopPropagation={handleMenuOpen}>
                        <img src={`https://cdn.discordapp.com/avatars/${_user._id}/${_user.avatar}`} alt="avatar" class="rounded-full w-[50px]">
                    </button>
                </span>

                <div aria-hidden="true" on:click|stopPropagation={() => {}} class={`user-nav ${isMenuOpen ? "flex" : "hidden"} justify-center items-center absolute border-primary-2 border-[3px] w-[150px] px-[10px] py-[15px] top-[65px] right-[25px] rounded-2xl animate-fade transition-[.5s]`}>
                    <ul class="flex flex-col items-center">
                        <li class="mb-[10px] w-[100%] group">
                            <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-6px] bg-primary-2 absolute opacity-0 group-hover:animate-fade" />
                            <a href="/" class="flex flex-row items-center justify-start">
                                <img src={ Dashboard } alt="dashboard" class="w-[20px] mr-[4px]">
                                <p>Dashboard</p>
                            </a>
                        </li>
      
                        <hr class="w-[80px] border-[#8a8a8a8c] border-4px rounded-full">
      
                        <li class="my-[10px] w-[100%] group">
                            <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-6px] bg-primary-2 absolute opacity-0 group-hover:animate-fade" />
                            <a href="/" class="flex flex-row items-center justify-start">
                                <img src={ Profile } alt="profile" class="w-[16px] mx-[4px]">
                                <p>Perfil</p>
                            </a>
                        </li>
      
                        <hr class="w-[80px] border-[#8a8a8a8c] border-4px rounded-full">
      
                        <li class="mt-[10px] w-[100%] group">
                            <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-6px] bg-primary-2 absolute opacity-0 group-hover:animate-fade" />
                            <a href="/" class="flex flex-row items-center justify-start">
                                <img src={ Logout } alt="logout" class="w-[16px] mx-[4px]">
                                <p class="text-highlite-red">Sair</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        {/if}
    </div>

    <div class="box md:hidden relative">
        {#if !isNavOpen}
            <button on:click|stopPropagation={handleNavOpen}>
                <img src={ OpenMenu } alt="abrir_menu" class="w-[35px]">
            </button>
        {:else}
            <button on:click|stopPropagation={handleNavClose}>
                <img src={ CloseMenu } alt="fechar_menu" class="w-[35px]">
            </button>
        {/if}

        <div aria-hidden="true" on:click|stopPropagation={() => {}} class={`nav-drop ${isNavOpen ? "absolute" : "hidden"} top-[100%] right-[5px] bg-[#ffffffe7] rounded-b-[25px] rounded-tl-[25px] rounded-tr-[5px] border-[2px] border-solid border-[#e39b00]`}>
            <ul class="p-[15px]">
                <li class="flex flex-row my-[10px] w-[160px]">
                    <img src={ Suporte } alt="suporte_icon" class="w-[20px] mr-[8px]">
                    <p> Suporte </p>
                    <span />
                </li>

                <li class="flex flex-row my-[10px] w-[160px]">
                    <img src={ Document } alt="docs_icon" class="w-[20px] mr-[8px]">
                    <p> Documentação </p>
                    <span />
                </li>
                
                <li class="flex flex-row my-[10px] w-[160px]">
                    <img src={ Moeda } alt="coin_icon" class="w-[20px] mr-[8px]">
                    <p> Planos </p>
                    <span />
                </li>

                {#if !_user}

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <button class="flex justify-center items-center w-[80px] h-[45px] bg-primary-2 rounded-lg active:grayscale-[10%] hover:bg-[#e39b00] duration-500 m-auto">
                            <a href="http://localhost:8080/auth/login">
                                <p class="text-[#fff] font-medium text-[15px]">Login</p>
                            </a>
                        </button>
                        <!-- <img src={ Login } alt="dashboard" class="w-[20px] mr-[8px]">
                        <p>Login</p> -->
                    </li>

                {:else}
                    
                    <li class="flex flex-row items-center justify-center w-[160px]"> 
                        <hr class="w-[100px] border-[1px] border-solid border-primary-2 rounded-[1px]"/> 
                    </li>
                    
                    <li class="flex flex-row my-[10px] w-[160px]">
                        <img src={ Dashboard } alt="dashboard" class="w-[20px] mr-[8px]">
                        <p>Dashboard</p>
                    </li>

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <img src={ Profile } alt="profile" class="w-[16px] mx-[4px] mr-[8px]">
                        <p>Perfil</p>
                    </li>

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <img src={ Logout } alt="logout" class="w-[16px] mx-[4px] mr-[8px]">
                        <p class="text-highlite-red">Sair</p>
                    </li>

                {/if}
            </ul>
        </div>
    </div>
</nav>