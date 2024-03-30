<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";
    import { PUBLIC_API_URL, PUBLIC_CDN_URL } from "$env/static/public";
    import { goto } from "$app/navigation";
    import VipsJSON from "$lib/mocks/vips.json";
    import Icon from "@iconify/svelte";
    import { format } from "date-fns";
    import { ptBR } from "date-fns/locale";

    let userData: any;
    let billingData: any;
    let subscriptionData: any;
    let subscriptionPlane: any = "nenhum";

    onMount(async () => {
        const { data: sessionData } = await axios.get(`${PUBLIC_API_URL}/auth/session`, { withCredentials: true });

        if (!sessionData) return goto("/");

        const { data: invoicesReqData } = await axios.get(`${PUBLIC_API_URL}/payments/retrieve/invoices`, { withCredentials: true });
        const { data: subscriptionReqData } = await axios.get(`${PUBLIC_API_URL}/payments/retrieve/subscription`, { withCredentials: true });

        userData = sessionData;
        billingData = invoicesReqData;
        subscriptionData = subscriptionReqData;
    });

    $: console.log(billingData);

    const vipsArray = Object.entries(VipsJSON);

    $: if (subscriptionData && subscriptionData.active !== 0) {
        subscriptionPlane = vipsArray.find((obj) => obj[0] == subscriptionData.vipType);
    }

    const go = (url: Location) => {
        window.location = url;
    };

    const formatDate = (date: any) => {
        return format(new Date(date), "dd/MM/yyyy", { locale: ptBR })
    }
</script>

<div class="container relative flex flex-col items-center justify-center mb-[100px]">
    <div class="signature-box w-[500px] h-[250px] m-[20px]">
        <div class="header h-[30px] flex items-center justify-start px-[6px]">
            <p>Assinatura</p>
        </div>

        <hr class="w-[500px] border-solid border-gray-2">

        <div class="content flex flex-row items-center justify-center">
            <div class="image-box w-[150px] h-[220px] flex items-center justify-center">
                {#if subscriptionData && subscriptionPlane && subscriptionData.active !== 0}
                    <img src={`${PUBLIC_CDN_URL}/default/vips/${subscriptionPlane[1].name.toLowerCase()}.png`} alt="vip-icon" class="w-[150px] h-[150px] mr-[5px]">
                {:else}
                    <img src={`${PUBLIC_CDN_URL}/default/vips/tronco.png`} alt="vip-icon" class="w-[150px] h-[150px] mr-[5px]">
                {/if}
            </div>

            <div class="data-box w-[350px] h-[220px] p-[30px] flex-col items-center justify-center">
                <div class="plane-name">
                    {#if subscriptionData && subscriptionPlane && subscriptionData.active !== 0}
                        <p class="text-[30px] font-semibold" style={`color: ${subscriptionPlane[1].color};`}>Plano {subscriptionPlane[1].name}</p>
                    {:else}
                        <p class="text-[30px] font-semibold">Nenhum</p>
                    {/if}
                </div>

                <hr class="border-solid border-gray-2 my-[5px]">

                <div class="siganture-status flex flex-row items-center justify-start">
                    <p>Status:</p>

                    {#if subscriptionData && subscriptionPlane && subscriptionData.active !== 0}
                        <p class="flex items-center justify-center ml-[5px]">
                            Ativa
                        </p>
                    {:else}
                        <p class="flex items-center justify-center ml-[5px]">
                            Inativa
                        </p>
                    {/if}
                </div>

                <div class="expires-at flex flex-row items-center justify-start">
                    <p>Proxima cobrança:</p>

                    {#if subscriptionData && subscriptionPlane && subscriptionData.active !== 0}
                        <p class="flex items-center justify-center ml-[5px]">
                            {
                                formatDate(subscriptionData.expires_at * 1000)
                            }
                        </p>
                    {:else}
                        <p class="flex items-center justify-center ml-[5px]">
                            Nunca
                        </p>
                    {/if}
                </div>

                <div class="buttons flex flex-row  my-[20px] items-center justify-center">
                    {#if subscriptionData && subscriptionPlane && subscriptionData.active !== 0}
                    <button disabled class="w-[120px] h-[36px] flex flex-row items-center justify-center rounded-md bg-primary mx-[10px] cursor-not-allowed">
                        <p class="text-[14px]">Trocar</p>

                        <Icon class="ml-[5px]" width="15px" height="15px" icon="uil:exchange-alt" />
                    </button>

                    <button disabled class="w-[120px] h-[36px] flex flex-row items-center justify-center rounded-md bg-highlite-red mx-[10px] cursor-not-allowed">
                        <p class="text-[14px]">Cancelar</p>

                        <Icon class="ml-[5px]" width="12px" height="12px" icon="maki:cross" />
                    </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="transactions-box flex flex-col items-center justify-center w-[500px]">
        <div class="header w-[500px] h-[30px] flex items-center justify-start px-[6px]">
            <p>Cobranças</p>
        </div>
        <hr class="w-[500px] border-solid border-gray-2">
        <ul>
            {#if billingData}
                {#each billingData as billingObj}
                    <li class="billingCard w-[500px] p-[15px] flex flex-row items-center justify-between bg-[#55555505]">
                        <div class="date-box">
                            <p class="flex items-center justify-center">
                                {
                                    formatDate(billingObj.created * 1000)
                                }
                            </p>
                        </div>

                        <div class="product-box flex flex-row items-center justify-center">
                            <p>
                                {
                                    billingObj.lines.split(" ")[2]
                                }
                                {
                                    billingObj.lines.split(" ")[3]
                                }
                            </p>
                        </div>

                        <div class="buttons flex items-center justify-center">
                            <button class="dark:bg-[#555] bg-[#cccccc70] px-[8px] py-[2px] rounded-md" on:click={() => go(billingObj.hosted_invoice_url)}>
                                <p class="text-[10px] dark:text-[#fff] font-semibold">{ billingObj.status == "paid" ? "RECIBO" : "PAGAR"}</p>
                            </button>
                        </div>

                        <div class="status-box flex items-center justify-center">
                            {#if billingObj.status == "paid"}
                                <div class="status-card bg-highlite-green px-[8px] py-[2px] rounded-md">
                                    <p class="text-[10px] text-[#fff] font-semibold">PAGO</p>
                                </div>
                                {:else}
                                <div class="status-card bg-primary px-[8px] py-[2px] rounded-md">
                                    <p class="text-[10px] text-[#fff] font-semibold">PENDENTE</p>
                                </div>
                            {/if}
                        </div>

                        { new Intl.NumberFormat('PT-BR', { style: 'currency', currency: 'BRL' }).format(billingObj.total / 100) }
                    </li>

                    <hr class="m-auto w-[95%] border-solid border-gray-2 mb-[10px]">
                {/each}
            {/if}
        </ul>
    </div>
</div>
