<script lang="ts">
    import DiscloudLogo from '$lib/assets/discloud-logo.svg';
    import Icon from "@iconify/svelte"

    const go = (url: any) => {
        window.location = url
    }
</script>

<svelte:head>
    <title>Parceiros - Jake</title>

    <meta property="og:type" content="website" />
	<meta property="og:url" content="https://jakebot.com.br/partners" />
	<meta property="og:title" content="Parceiros - Jake Bot" />
	<meta property="og:description" content="Aqui estão alguns parceiros e serviços que o Jake utiliza e recomenda!" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jakebot.com.br/partners" />
	<meta property="twitter:title" content="Parceiros - Jake Bot " />
	<meta property="twitter:description" content="Aqui estão alguns parceiros e serviços que o Jake utiliza e recomenda!" />

</svelte:head>

<div class="container flex flex-col md:my-[20px] md:m-auto md:w-[80%]">
    <div class="row flex-col-reverse md:flex-row">
        <div class="col">
            <img src={ DiscloudLogo } alt="discloud-logo" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-[#45be6c]">Discloud Bot</h1>

            <p class="my-[8px]">A <span class="text-[#45be6c]">Discloud</span> é uma plataforma de hospedagem para bots e sites que funciona 24 horas por dia, 7 dias por semana. Eles oferecem soluções robustas e personalizadas para atender às suas necessidades. <br /> <br /> Desde um simples site estático até uma API ou Dashboard, eles têm soluções para você. Você pode hospedar seu aplicativo em várias linguagens, como <span class="text-[#2088ff]">JavaScript</span>, <span class="text-[#15ff00]">Python</span>, <span class="text-[#ffe600]">Java</span>, <span class="text-[#ff8a1d]">Rust</span>, e muitas outras!</p>

            <div class="buttons my-[10px] flex items-center justify-center flex-col md:flex-row">
                <button on:click={() => go("https://discloudbot.com")} class="group group-hover:brightness-75 bg-[#45be6c]">
                    <Icon class="mx-[6px]" width="16px" height="16px" icon="material-symbols-light:globe" />

                    <p>Website</p>
                </button>

                <button on:click={() => go("https://discord.gg/discloud-584490943034425391")} class="group group-hover:brightness-75 bg-[#45be6c]">
                    <Icon class="mx-[6px]" width="16px" height="16px" icon="bi:discord" />

                    <p>Discord</p>
                </button>
                
                <button on:click={() => go("https://discord.discloudbot.com")} class="group group-hover:brightness-75 bg-[#45be6c]">
                    <Icon class="mx-[6px]" width="16px" height="16px" icon="icon-park-solid:help" />

                    <p>Docs</p>
                </button>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;

        .row {
            margin-bottom: 20px;
            padding: 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;

			@media screen and (min-width: 768px) {
				margin-bottom: 100px
			}
    
            .col {
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                text-align: center;
                margin: 30px;
                flex-direction: column;

                .buttons {
                    display: flex;

                    button {
                        a p {
                            font-size: 14px;
                            font-weight: 600;
                        }
                    }
                }
    
                H1 {
                    font-size: 42px;
                    font-weight: 600;
                    line-height: 60px;
                    margin: 10px 0;
                    font-family: 'Poppins', sans-serif;
                }
            }
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 40px;
		width: 120px;
        color: #fff;
        padding: 8px 10px;
        margin: 15px 10px;
        border-radius: 5px;
        transition: filter 0.5s;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }
</style>