<script lang="ts">
    import Icon from "@iconify/svelte";
    import Card from "$lib/components/vipCard.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import VipsJson from "$lib/mock/vips.json"
    import { onMount } from "svelte";
    import { userStoredValue } from "../../store/user";

    import Quartzo from "$lib/assets/vips/quartzo.png";
    import Ouro from "$lib/assets/vips/ouro.png";
    import Ametista from "$lib/assets/vips/ametista.png";
    import Topazio from "$lib/assets/vips/topazio.png";
    import Esmeralda from "$lib/assets/vips/esmeralda.png";
    import Rubi from "$lib/assets/vips/rubi.png";
    import Diamante from "$lib/assets/vips/diamante.png";
    import Obsidiana from "$lib/assets/vips/obsidiana.png";
    import Building from "$lib/assets/building.svg"

    let userData: any

    onMount(async () => {
        userStoredValue.subscribe(user => {
            userData = user
        })

        console.log(userData)
    })

    let showModal = false;

    const handleCloseModal = () => {
        showModal = false
    };

    const handleOpenModal = () => {
        showModal = true;
    };

    let selectedVip: any = null

    async function selectVip(id: String) {
        const vipsArray = Object.entries(VipsJson)

        const vip = vipsArray.find(vipObj => vipObj[0] == id )

        if (vip) {    
            selectedVip = vip[1]
        }
    }
</script>

<svelte:head>
    <title>Planos - Jake</title>
</svelte:head>

<div class="container flex flex-col justify-center items-center my-[50px]">
    <Modal show={showModal} on:close={handleCloseModal}>
        <div class="modal-content flex flex-row w-[100%] h-[100%] justify-center">
            {#if selectedVip}
                <!-- <div class="modal-col flex flex-col justify-center items-center w-[50%] animate-slideLeft">
                    <div class="vip-icon flex w-[150px] h-[150px] items-center justify-center">
                        {#if selectedVip.name == "Quartzo"} <img src={ Quartzo } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Ouro"} <img src={ Ouro } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Ametista"} <img src={ Ametista } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Topázio"} <img src={ Topazio } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Esmeralda"} <img src={ Esmeralda } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Rubi"} <img src={ Rubi } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Diamante"} <img src={ Diamante } alt="vip-icon" class="flex w-[150px]"> {/if}
                        {#if selectedVip.name == "Obsidiana"} <img src={ Obsidiana } alt="vip-icon" class="flex w-[150px]"> {/if}
                    </div>
                    <div class="infos-container flex flex-col items-center justify-center">
                        <div class="title m-[20px]">
                            <h1 class="text-[30px] font-semibold" style={`color: ${selectedVip.primaryColor}`}>VIP {selectedVip.name}</h1>
                        </div>
                        <div class="prices flex flex-col justify-center items-center">
                            <div class="calc flex flex-row justify-between w-[200px]">
                                <div class="info">
                                    <ul>
                                        <li>
                                            <p>Valor mensal:</p>
                                        </li>
                                        <li>
                                            <p>Desconto:</p>
                                        </li>
                                        <li>
                                            <p>Taxa:</p>
                                        </li>
                                    </ul>
                                </div>

                                <div class="data">
                                    <ul>
                                        <li class="text-right">
                                            <p>
                                                { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(selectedVip.prices.month * (quantity == "month" ? 1 : 1) * (quantity == "quarter" ? 3 : 1) * (quantity == "year" ? 12 : 1)) }
                                            </p>
                                        </li>
                                        <li class="text-right">
                                            <p>
                                                { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format((selectedVip.prices.month * (quantity == "month" ? 1 : 1) * (quantity == "quarter" ? 3 : 1) * (quantity == "year" ? 12 : 1) - selectedVip.prices[quantity]) ) }
                                            </p>
                                        </li>
                                        <li class="text-right">
                                            <p>
                                                { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(0) }
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <hr class="flex w-[200px] my-[15px] border-solid border-[1px] rounded-full" style={`border-color: ${selectedVip.primaryColor}`}>

                            <div class="total flex flex-row justify-between w-[200px]">
                                <div class="info">
                                    <p class="font-medium" style={`color: ${selectedVip.primaryColor}`}>
                                        Valor total:
                                    </p>
                                </div>

                                <div class="data">
                                    <p>
                                        { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(selectedVip.prices[quantity])}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                
                <div class="modal-col flex flex-col items-center justify-center w-[50%] animate-slideRight">
                    <img src={ Building } alt="development-icon" class="w-60 m-2">
                    <h1 class="text-primary-2 font-bold text-[24px] m-2">Em desenvolvimento</h1>
                    <button class="flex flex-row items-center justify-end m-2">
                        <a href="/" class="flex flex-row items-center justify-end m-2">
                            <Icon icon="ic:round-arrow-left" color="#fc9304" height="40px"/> 
    
                            <p>Voltar para pagina inicial</p>
                        </a>
                    </button>
                </div>
            {/if}
        </div>
    </Modal>
    
    <div class="vip-container w-full flex flex-wrap items-start justify-center">
        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("1")}}
            primaryColor="#979797"
        >
            <img
                slot="image"
                src={Quartzo}
                alt="vip-quartzo"
                class="w-[80px] md:w-[54px]"
            />
            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#979797] font-medium"
            >
                Quatzo
            </h1>
            <p slot="price" class="text-[18px] text-[#a7a7a7]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["1"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.5</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.25</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.25</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge quartzo</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo quartzo</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#979797"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("2")}}
            primaryColor="#ffa928"
        >
            <img
                slot="image"
                src={Ouro}
                alt="vip-ouro"
                class="w-[80px] md:w-[54px]"
            />

            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#ffa928] font-medium"
            >
                Ouro
            </h1>
            <p slot="price" class="text-[18px] text-[#ffab67]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["2"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.75</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.50</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                    icon="maki:cross"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.50</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge ouro</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo ouro</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ffa928"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("3")}}
            primaryColor="#a928ff"
        >
            <img
                slot="image"
                src={Ametista}
                alt="vip-ametista"
                class="w-[80px] md:w-[54px]"
            />

            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#a928ff] font-medium"
            >
                Ametista
            </h1>
            <p slot="price" class="text-[18px] text-[#c267ff]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["3"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>2</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.75</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>1.75</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge ametista</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo ametista</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#a928ff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("4")}}
            primaryColor="#04b4f4"
        >
            <img
                slot="image"
                src={Topazio}
                alt="vip-topazio"
                class="w-[80px] md:w-[54px]"
            />

            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#04b4f4] font-medium"
            >
                Topázio
            </h1>
            <p slot="price" class="text-[18px] text-[#44d4fc]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["4"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>3</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>2</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>2</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge topazio</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo topazio</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#04b4f4"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("5")}}
            primaryColor="#12c50c"
        >
            <img
                slot="image"
                src={Esmeralda}
                alt="vip-esmeralda"
                class="w-[80px] md:w-[54px]"
            />

            <h1 
                slot="name" 
                class="text-[26px] md:text-[26px] text-[#12c50c] font-medium">
                Esmeralda
            </h1>
            <p slot="price" class="text-[18px] text-[#08eb00]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["5"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                    icon="maki:cross"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>5</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>3</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>3</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge esmeralda</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo esmeralda</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#12c50c"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("6")}}
            primaryColor="#ff0000"
        >
            <img
                slot="image"
                src={Rubi}
                alt="vip-rubi"
                class="w-[80px] md:w-[54px]"
            />

            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#ff0000] font-medium"
            >
                Rubi
            </h1>
            <p slot="price" class="text-[18px] text-[#ff6d6d]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["6"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>10</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>5</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>5</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge rubi</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo rubi</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#ff0000"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("7")}}
            primaryColor="#4b8aff"
        >
            <img
                slot="image"
                src={Diamante}
                alt="vip-diamante"
                class="w-[80px] md:w-[54px]"
            />

            <h1
                slot="name"
                class="text-[26px] md:text-[26px] text-[#4b8aff] font-medium"
            >
                Diamante
            </h1>
            <p slot="price" class="text-[18px] text-[#6a9eff]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["7"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>15</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>10</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>10</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge diamante</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo diamante</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#4b8aff"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>

        <Card
            on:open={handleOpenModal}
            on:vipType={() => {selectVip("8")}}
            primaryColor="#520072"
        >
            <img
                slot="image"
                src={Obsidiana}
                alt="vip-obsidiana"
                class="w-[80px] md:w-[54px]"
            />

            <h1
            slot="name"
                class="text-[26px] md:text-[26px] text-[#520072] font-medium"
            >
                Obsidiana
            </h1>
            <p slot="price" class="text-[18px] text-[#6b0096]">
                {new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(VipsJson["8"].prices.month)}<span class="text-[10px] text-[#4b4b4b]">/mês</span>
            </p>

            <ul slot="visible-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>20</span> XP em todo o bot
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>15</span> no daily
                    </p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="maki:cross"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        <span>15</span> nas colheitas
                    </p>
                </li>
            </ul>

            <ul slot="hidden-features">
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Badge obsidiana</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">Cargo obsidiana</p>
                </li>
                <li class="flex flex-row items-center">
                    <Icon
                        icon="icon-park-outline:dot"
                        color="#520072"
                        height="16px"
                        class="mr-[5px]"
                    />
                    <p class="text-[15px]">
                        Chats exclusivos
                    </p>
                </li>
            </ul>
        </Card>
    </div>
</div>
