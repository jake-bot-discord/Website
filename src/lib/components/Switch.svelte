<script lang="ts">
    export let label: any;
    export let fontSize = 16;
    export let boxSize = 600;
    export let value = "off";

    let checked = false;

    const uniqueID = Math.floor(Math.random() * 100);

    function handleClick(event: any) {
        const target = event.target;

        const state = target.getAttribute("aria-checked");

        checked = state === "true" ? false : true;

        value = checked === true ? "on" : "off";
    }

    const slugify = (str = "") =>
        str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<div class="slider flex items-center justify-between" style="font-size:{fontSize}px; width:{boxSize}px">
    <span id={`switch-${uniqueID}`}>{label}</span>

    <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={handleClick}
        class="ml-[10px] w-[46px] h-[20px] relative bg-[#9b9b9b] border-none rounded-full"
    >
    </button>
</div>

<style>
    .slider button::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background: #fff;
        top: 2px;
        left: 2px;
        transition: transform 0.3s;
    }

    .slider button[aria-checked="true"] {
        background-color: #fc9304;
    }

    .slider button[aria-checked="true"]::before {
        transform: translateX(26px);
        transition: transform 0.3s;
    }

    .slider button::before {
        border-radius: 100%;
    }
</style>
