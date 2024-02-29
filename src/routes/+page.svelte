<script>
    import { theme } from "../store/theme"
    import Icon from "@iconify/svelte"

    import Icone from "$lib/assets/jake-icone.png"
    import Fazendas from "$lib/assets/fazenda.png"
    import Pishing from "$lib/assets/protecao.png"
    import protecao from "$lib/assets/protecao-2.png"
    import funcoes from "$lib/assets/funcoes.png"
    import Planta from "$lib/assets/planta.png"
</script>

<svelte:head>
    <title>Home - Jake</title>

    <meta property="og:type" content="website" />
	<meta property="og:url" content="https://jakebot.com.br" />
	<meta property="og:title" content="Jake Bot" />
	<meta property="og:description" content="O bot gratuito que faz tudo que bots pagos não fazem! Alem de ser um projeto completo e seguro, o Jake é completamente gratuito e sem fins lucrativos!" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jakebot.com.br" />
	<meta property="twitter:title" content="Jake Bot " />
	<meta property="twitter:description" content="O bot gratuito que faz tudo que bots pagos não fazem! Alem de ser um projeto completo e seguro, o Jake é completamente gratuito e sem fins lucrativos!" />
</svelte:head>

<div class="container flex flex-column md:m-auto md:w-[80%] ">
    <div class="row flex-col-reverse md:flex-row">
        <div class="col">
            <img src={ Icone } alt="icone" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Seja bem vindo!</h1>

            <p class="my-[5px] md:my-[20px] text-[18px]">O Jake é um simples bot de funções gerais como moderação, economia, musica, e muito mais! Alem de tudo, é um bot gratuito, e com um suporte 24/7!</p>

            <div class="buttons my-[10px]">
                <button class="group group-hover:brightness-75 bg-highlite-blue">
                    <a href="/">
                        <p>Me adicione!</p>
                    </a>
                </button>

                <button class="group group-hover:brightness-75 bg-primary">
                    <a href="/">
                        <p>Saiba mais!</p>
                    </a>
                </button>
            </div>
        </div>
    </div>

    <div class="row flex-col-reverse md:flex-row-reverse">
        <div class="col">
            <img src={ Fazendas } alt="fazendas" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Sistema de fazendas!</h1>

            <p class="my-[5px] md:my-[20px] text-[18px]">O Jake possui um sistema de fazendinhas onde você pode plantar diversos vegetais, cuidar de animais, e muito mais! E tudo dentro do próprio bot e de forma gratuita para todos! </p>

            <div class="buttons my-[10px]">
                <button class="group group-hover:brightness-75 bg-primary">
                    <a href="/">
                        <p>Saiba mais!</p>
                    </a>
                </button>
            </div>
        </div>
    </div>

    <div class="row flex-col-reverse md:flex-row">
        <div class="col">
            <img src={ protecao } alt="proteção" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Moderação gratuita!</h1>

            <p class="my-[5px] md:my-[20px] text-[18px]">Ao contario de muitos bots, o sistema de moderação do Jake é completamente gratuito! E possui funções como contador de membros, anti invites, logs, e muito mais! Tambem possui suporte 24h para esclarecer qualquer duvida que apareça!</p>

            <div class="buttons my-[10px]">
                <button class="group group-hover:brightness-75 bg-primary">
                    <a href="/">
                        <p>Saiba mais!</p>
                    </a>
                </button>
            </div>
        </div>
    </div>

    <div class="row flex-col-reverse md:flex-row-reverse">
        <div class="col">
            <img src={ Pishing } alt="anti-invites" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Anti invites e pishing/scamm!</h1>

            <p class="my-[5px] md:my-[20px] text-[18px]">Alem de tudo, o Jake ainda possui um sistema de Anti invites e pishing/scamm que evita que pessoas mal intensionadas enviem links suspeitos/perigosos em seus chats, tornando seu servidor mais seguro!</p>

            <div class="buttons my-[10px]">
                <button class="group group-hover:brightness-75 bg-primary">
                    <a href="/">
                        <p>Saiba mais!</p>
                    </a>
                </button>
            </div>
        </div>
    </div>

    <div class="row flex-col-reverse md:flex-row">
        <div class="col">
            <img src={ funcoes } alt="anti-invites" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Por que escolher o Jake?</h1>
            
            <ul class="features-list w-[100%]">
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Moderação gratuita</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Proteção contra raids</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Varias funções para interações</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Simples e facil de se usar</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Suporte 24/7</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Uma host potente e gratuita</p>
                </li>
                
                <li class="flex flex-row my-[4px] items-center">
                    <Icon icon="icon-park-solid:check-one" color="#5aa900" height="20px" class="mr-[5px]" />

                    <p>Sistema avançado de economia</p>
                </li>
                
                <li class="h-[70px] bg-[#559cff71] flex items-center justify-center flex-row my-[20px] p-[20px] rounded-xl">
                    <Icon icon="tabler:diamond-filled" color={$theme ? "#4dc7ff" : "#046dfc"} height="30px" class="m-[5px]"/>

                    <p class="text-[15px] ">Algumas funções extras estão disponiveis para <span class="text-highlite-blue dark:text-[#4dc7ff]"><u><a href="/planos">doadores</a></u></span></p>
                </li>
            </ul>
        </div>
    </div>

    <div class="row flex-col-reverse md:flex-row-reverse">
        <div class="col">
            <img src={ Planta } alt="anti-invites" class="w-[220px] md:w-[280px]">
        </div>
        <div class="col">
            <h1 class="text-primary">Regue a plantinha</h1>

            <p class="my-[5px] md:my-[20px] text-[18px]">Apesar dele ser um projeto gratuito, o Jake é como uma plantinha, precisa de água pra crescer. Você pode ajuda-lo se tornando um doador. Clica abaixo pra saber mais!</p>

            <div class="buttons my-[10px]">
                <button class="group group-hover:brightness-75 bg-primary">
                    <a href="/">
                        <p>Seja um doador!</p>
                    </a>
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
                    flex-direction: row;

                    button {
                        a p {
                            font-size: 14px;
                            font-weight: 600;
                        }
                    }
                }
    
                H1 {
                    font-size: 34px;
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
        height: 50px;
		width: 150px;
        color: #fff;
        padding: 8px 10px;
        margin: 15px 10px;
        border-radius: 5px;
        transition: filter 0.5s;
        border: none;
        font-size: 14px;
        font-weight: 500;

        a {
            color: #fff;
        }
    }
</style>