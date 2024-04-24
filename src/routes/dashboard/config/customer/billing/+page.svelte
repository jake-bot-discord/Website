<script>
// @ts-nocheck

    import { PUBLIC_CDN_URL } from "$env/static/public";
    import VipsJSON from "$lib/mocks/vips.json";
    import Icon from "@iconify/svelte";
    import { format } from "date-fns";
    import { ptBR } from "date-fns/locale";

    export let data

    let subscriptionPlane = "nenhum";

    const vipsArray = Object.entries(VipsJSON);

    $: if (data.subscriptionData && data.subscriptionData.active !== 0) {
        subscriptionPlane = vipsArray.find((obj) => obj[0] == data.subscriptionData.vipType);
    }

    const go = (url) => {
        window.location = url;
    };

    const formatDate = (date) => {
        return format(new Date(date), "dd/MM/yyyy", { locale: ptBR })
    }
</script>

<div class="container relative flex flex-col items-center justify-center mb-[100px]">
    <div class="signature-box w-[600px] h-[250px] m-[20px]">
        <div class="header h-[30px] flex items-center justify-start px-[6px]">
            <h2 class="font-semibold text-[12px] text-[#9b9b9b]">ASSINATURA</h2>
        </div>

        <hr class="w-[600px] border-solid border-gray-2">

        <div class="content flex flex-row items-center justify-center">
            <div class="image-box w-[150px] h-[220px] flex items-center justify-center">
                {#if data.subscriptionData && subscriptionPlane && data.subscriptionData.active !== 0}
                    <img src={`${PUBLIC_CDN_URL}/default/vips/${subscriptionPlane[1].name.toLowerCase()}.png`} alt="vip-icon" class="w-[150px] h-[150px] mr-[5px]">
                {:else}
                    <img src={`${PUBLIC_CDN_URL}/default/vips/tronco.png`} alt="vip-icon" class="w-[150px] h-[150px] mr-[5px]">
                {/if}
            </div>

            <div class="data-box w-[350px] h-[220px] p-[30px] flex-col items-center justify-center">
                <div class="plane-name">
                    {#if data.subscriptionData && subscriptionPlane && data.subscriptionData.active !== 0}
                        <p class="text-[30px] font-semibold" style={`color: ${subscriptionPlane[1].color};`}>Plano {subscriptionPlane[1].name}</p>
                    {:else}
                        <p class="text-[30px] font-semibold">Nenhum</p>
                    {/if}
                </div>

                <hr class="border-solid border-gray-2 my-[5px]">

                <div class="siganture-status flex flex-row items-center justify-start">
                    <p>Status:</p>

                    {#if data.subscriptionData && subscriptionPlane && data.subscriptionData.active !== 0}
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

                    {#if data.subscriptionData && subscriptionPlane && data.subscriptionData.active !== 0}
                        <p class="flex items-center justify-center ml-[5px]">
                            {#if data.subscriptionData.expires_at * 1000 < Date.now()}
                                <span class="text-red-500">Expirado</span>
                            {:else}
                                {
                                    formatDate(data.subscriptionData.expires_at * 1000)
                                }
                            {/if}
                        </p>
                    {:else}
                        <p class="flex items-center justify-center ml-[5px]">
                            Nunca
                        </p>
                    {/if}
                </div>

                <div class="buttons flex flex-row  my-[20px] items-center justify-center">
                    {#if data.subscriptionData && subscriptionPlane && data.subscriptionData.active !== 0}
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

    <div class="transactions-box flex flex-col items-center justify-center w-[600px]">
        <div class="header w-[600px] h-[30px] flex items-center justify-start px-[6px]">
            <h2 class="font-semibold text-[12px] text-[#9b9b9b]">COBRANÇAS</h2>
        </div>
        <hr class="w-[600px] border-solid border-gray-2">
        <ul>
            {#if data.billingData}
                {#each data.billingData as billingObj}
                    <li class="billingCard w-[600px] p-[15px] flex flex-row items-center justify-between bg-[#55555505]">
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
