<script>
    import Logo from "$lib/assets/jake-logo.png";
    import Discord from "$lib/icons/discord.svg"
    import Email from "$lib/icons/email.svg"
    import Insgram from "$lib/icons/instagram.svg"
</script>

<footer class="flex flex-col-reverse md:flex-row items-center justify-center mb-[40px]">
    <hr>

    <div class="col">
        <img src={Logo} alt="logo" class="w-[200px]" />

        <div class="socials">
            <a href="https://discord.gg/KT4K2UZy7e">
                <img src={ Discord } alt="" class="w-[25px]">
            </a>
            <a href="mailto:contato@jakebot.com.br">
                <img src={ Email } alt="" class="w-[25px]">
            </a>
            <a href="/">
                <img src={ Insgram } alt="" class="w-[25px]">
            </a>
        </div>
    </div>

    <div class="col">
        <div class="title">
            <h2>Informações</h2>
        </div>
        <ul class="flex flex-col items-center md:items-start">
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>O inicio</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Como funciona</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Host</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Parceiros</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Termos de serviço</p>
                </a>
            </li>
        </ul>
    </div>

    <div class="col">
        <div class="title">
            <h2>Guias</h2>
        </div>
        <ul class="flex flex-col items-center md:items-start">
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Setup inicial</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Moderação</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Economia</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Musicas</p>
                </a>
            </li>
            <li>
                <a href="/" class="flex items-center relative group">
                    <span class="flex w-[4px] h-[20px] rounded-full translate-x-[-8px] bg-primary-2 absolute opacity-0 group-hover:animate-fade"/>
                    <p>Extras</p>
                </a>
            </li>
        </ul>
    </div>
</footer>

<style lang="scss">
    footer {
        width: 100%;
        position: relative;
        margin-top: 20px;

        hr {
            position: absolute;
            top: -20px;
            width: 90%;
            border: .5px solid #8a8a8a8c;
            border-radius: 100%;
        }
    }

    .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        height: 100%;
        margin: 20px;

        .title h2 {
            font-weight: 600;
            font-size: 24px;
            color: #ffae00;
            margin-bottom: 10px;
            margin-top: 30px;
        }

        ul li a p {
            font-size: 18px;
            margin: 4px 0;
        }

        .socials {
            display: flex;
            flex-direction: row;
            width: 120px;
            justify-content: space-between;
        }
    }
</style>