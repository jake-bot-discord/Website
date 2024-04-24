<script>
    import "../app.css"
    import NavBar from "$lib/components/NavBar.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<div class="app flex items-center justify-center flex-col">
    <NavBar />
    <slot class="p-[20px]"/>
    <Footer />
</div>