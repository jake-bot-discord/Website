<script>
    import { onMount } from "svelte";
    import { userStoredValue } from "../../store/user"
    import { PUBLIC_API_URL } from "$env/static/public"
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte"
    import Icon from "@iconify/svelte"
    import { theme } from "../../store/theme";

    //imagens
    import Logo from "$lib/assets/jake-logo.png"
    
    //icones
    import Profile from "$lib/icons/profile.svg"
    import Logout from "$lib/icons/logout.svg"
    import Dashboard from "$lib/icons/dashboard.svg"
    import axios from "axios";

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
        
        document.body.addEventListener('click', handleMenuClose)
    }

    const handleMenuClose = () => {
		isMenuOpen = false
        		
        document.body.removeEventListener('click', handleMenuClose)
	}

    export let isNavOpen = false 

    const handleNavOpen = () => {
        isNavOpen = true
        
        document.body.addEventListener('click', handleNavClose)
    }

    const handleNavClose = () => {
		isNavOpen = false
        		
        document.body.removeEventListener('click', handleNavClose)
	}

    const logout = async () => {
        console.log("desconectando")
        try {
            await axios.get(`${PUBLIC_API_URL}/auth/logout`, { withCredentials: true })
    
            location.reload()
        } catch(err) {
            console.log(err)
        }
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
            <li class="flex items-center justify-center mx-[15px] text-[16px]">
                <button>
                    <a href="/" class="flex items-center justify-center relative group cursor-pointer">
                        <p class="text-[18px]"> Suporte </p>
                        <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
                    </a>
                </button>
            </li>
            <li class="flex items-center justify-center mx-[15px] text-[16px]">
                <button>
                    <a href="/" class="flex items-center justify-center relative group cursor-pointer">
                        <p class="text-[18px]"> Documentação </p>
                        <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
                    </a>
                </button>
            </li>
            <li class="flex items-center justify-center mx-[15px] text-[16px]">
                <button>
                    <a href="/planos" class="flex items-center justify-center relative group cursor-pointer">
                        <p class="text-[18px]"> Planos </p>
                        <span class="flex absolute opacity-0 translate-y-[12px] w-[35px] h-[4px] rounded-full bg-primary-2 group-hover:animate-fade" />
                    </a>
                </button>
            </li>
            <li class="flex items-center justify-center mx-[15px]">
                <ThemeSwitcher />
            </li>
        </ul>
    </div>

    <div class="box hidden md:flex">
        {#if !_user}
            <button class="flex justify-center items-center w-[80px] h-[45px] bg-primary-2 rounded-lg active:grayscale-[10%] hover:bg-[#e39b00] duration-500">
                <a href={`${PUBLIC_API_URL}/auth/login`}>
                    <p class="text-[#fff] font-medium text-[15px]">Login</p>
                </a>
            </button>
        {:else}
            <div class="user-box relative">
                <span class="flex justify-center items-center rounded-full border-primary-2 border-[3px] w-[62px] h-[62px]">
                    <button on:click|stopPropagation={handleMenuOpen}>
                        <img src={`https://cdn.discordapp.com/avatars/${_user.discord.userId}/${_user.discord.avatar}`} alt="avatar" class="rounded-full w-[50px]">
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
                            <button on:click={() => logout()} class="flex flex-row items-center justify-start">
                                <img src={ Logout } alt="logout" class="w-[16px] mx-[4px]">
                                <p class="text-highlite-red">Sair</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        {/if}
    </div>

    <div class="box md:hidden relative">
        <div class="box flex flex-row items-center justify-center">
            <ThemeSwitcher />
    
            {#if !isNavOpen}
                <button class="ml-[20px]" on:click|stopPropagation={handleNavOpen}>
                    <Icon icon="ion:menu" height="35px"/>
                </button>
            {:else}
                <button class="ml-[20px]" on:click|stopPropagation={handleNavClose}>
                    <Icon icon="maki:cross" height="30px" />
                </button>
            {/if}
        </div>

        <div aria-hidden="true" on:click|stopPropagation={() => {}} class={`nav-drop ${isNavOpen ? "absolute" : "hidden"} top-[100%] right-[5px] bg-theme-light-background dark:bg-theme-dark-background rounded-b-[25px] rounded-tl-[25px] rounded-tr-[5px] border-[2px] border-solid border-[#e39b00]`}>
            <ul class="p-[15px]">
                <li class="flex flex-row my-[10px] w-[160px]">
                    <button>
                        <a href="/" class="flex flex-row">
                            <Icon icon="tabler:headset" height="20px" class="mr-[8px]" color={!$theme ? "#212121" : "#fff"}/>
                            <p> Suporte </p>
                            <span />
                        </a>
                    </button>
                </li>

                <li class="flex flex-row my-[10px] w-[160px]">
                    <button>
                        <a href="/" class="flex flex-row">
                            <Icon icon="simple-icons:googledocs" height="20px" class="mr-[8px]" color={!$theme ? "#212121" : "#fff"}/>
                            <p> Documentação </p>
                            <span />
                        </a>
                    </button>
                </li>
                
                <li class="flex flex-row my-[10px] w-[160px]">
                    <button>
                        <a href="/planos" class="flex flex-row">
                            <Icon icon="tabler:coin" height="20px" class="mr-[8px]" color={!$theme ? "#212121" : "#fff"}/>
                            <p> Planos </p>
                            <span />
                        </a>
                    </button>
                </li>

                {#if !_user}

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <button class="flex justify-center items-center w-[80px] h-[45px] bg-primary-2 rounded-lg active:grayscale-[10%] hover:bg-[#e39b00] duration-500 m-auto">
                            <a href={`${PUBLIC_API_URL}/auth/login`}>
                                <p class="text-[#fff] font-medium text-[15px]">Login</p>
                            </a>
                        </button>
                    </li>

                {:else}
                    
                    <li class="flex flex-row items-center justify-center w-[160px]"> 
                        <hr class="w-[100px] border-[1px] border-solid border-primary-2 rounded-[1px]"/> 
                    </li>
                    
                    <li class="flex flex-row my-[10px] w-[160px]">
                        <button>
                            <a href="/" class="flex flex-row">
                                <Icon icon="humbleicons:dashboard" height="20px" class="mr-[8px]" color={!$theme ? "#212121" : "#fff"}/>
                                <p>Dashboard</p>
                            </a>
                        </button>
                    </li>

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <button>
                            <a href="/" class="flex flex-row">
                                <Icon icon="iconamoon:profile-fill" height="20px" class="mr-[8px]" color={!$theme ? "#212121" : "#fff"}/>
                                <p>Perfil</p>
                            </a>
                        </button>
                    </li>

                    <li class="flex flex-row my-[10px] w-[160px]">
                        <button>
                            <button on:click={() => logout()} class="flex flex-row">
                                <Icon icon="uis:signout" color="#ff1212" height="20px" class="mr-[8px]"/>
                                <p class="text-highlite-red">Sair</p>
                            </button>
                        </button>
                    </li>

                {/if}
            </ul>
        </div>
    </div>
</nav>