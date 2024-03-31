<script lang="ts">
    import Card from "$lib/components/vipCard.svelte";
    import VipsJson from "$lib/mocks/vips.json"

    const VipsArray = Object.entries(VipsJson)
</script>

<svelte:head>
    <title>Planos - Jake</title>

    <meta property="og:type" content="website" />
	<meta property="og:url" content="https://jakebot.com.br/planos" />
	<meta property="og:title" content="Planos - Jake Bot" />
	<meta property="og:description" content="Aqui você pode escolher um plano VIP que te dara beneficios como funções extras e mais personalizações do bot!" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jakebot.com.br/planos" />
	<meta property="twitter:title" content="Planos - Jake Bot " />
	<meta property="twitter:description" content="Aqui você pode escolher um plano VIP que te dara beneficios como funções extras e mais personalizações do bot!" />

</svelte:head>

<div class="container flex flex-col justify-center items-center mt-[50px] mb-[150px]">
    <div class="vip-section w-full flex flex-wrap items-start justify-center">
        {#each VipsArray as VipObj}
            <Card vipData={ VipObj } />
        {/each}
    </div>
</div>
