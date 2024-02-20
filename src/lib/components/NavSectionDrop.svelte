<script>
    import { goto } from "$app/navigation";
    import Icon from "@iconify/svelte";

    let open = false
</script>

<li class="group relative flex flex-col my-[4px]">
    <span class={`opacity-0 nav_indicator group-hover:opacity-100 group-hover:duration-[.8s]`} />
    <div class="section-header">
        <button on:click={() => {open = !open}} class="flex flex-row items-center">
            <Icon icon="ic:round-play-arrow" color={!open ? "#9e9e9e" : "#fc9304"} height="16px" class={`mr-[4px] ${!open ? "rotate-0" : "rotate-90"} duration-300`}/> 
            <slot name="section-name"> </slot>
        </button>
    </div>
    {#if open}
        <slot name="section-list"></slot>
    {/if}
</li>