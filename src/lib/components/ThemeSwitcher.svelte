<script>
    import { browser } from "$app/environment";
    import { theme } from "../../store/theme";
    import Icon from "@iconify/svelte";

    const switchTheme = () => {
        theme.set(!$theme)

        localStorage.setItem('theme', $theme ? 'dark' : 'light');

        return $theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            theme.set(true)
        } else {
            document.documentElement.classList.remove('dark');
            theme.set(false)
        }
    }
</script>

<div>
    <button on:click={switchTheme} class="flex items-center justify-center m-auto">
        {#if !$theme}
            <Icon icon="mingcute:sun-fill" height="24px" color="fc9304" class="animate-fade"/>
        {:else}
            <Icon icon="tabler:moon-filled" height="24px" color="#94bfff" class="animate-fade"/>
        {/if}
    </button>
</div>