<script>
    import "../app.css"
    import NavBar from "$lib/components/NavBar.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import { onMount } from "svelte";
</script>

<NavBar />
<slot class="p-[20px]"/>
<Footer />