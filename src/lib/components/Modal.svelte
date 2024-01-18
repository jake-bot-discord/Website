<script>
    import Icon from "@iconify/svelte"
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    export let show = true

    const showModalFunction = () => {
        show = false

        dispatch('close')
    }
</script>

{#if show}
    <div class="modal-background overscroll-none fixed top-0 left-0 w-full h-full bg-[#555] bg-opacity-40 backdrop-blur-[4px] z-50 animate-fade">
        <div class="modal-container flex mx-auto my-20 items-center justify-center w-[80%] h-[80%] p-[50px] bg-[#fff] rounded-[30px] relative">
            <button class="absolute top-[20px] right-[20px]" on:click|stopPropagation={showModalFunction}>
                <Icon icon="maki:cross" height="20px" color="#555"/>
            </button>

            <slot></slot>
        </div>
    </div>
{/if}