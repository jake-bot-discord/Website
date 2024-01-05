<script>
    import "./app.css";
    import NavBar from "./components/NavBar.svelte"
    import Footer from "./components/Footer.svelte"
</script>

<NavBar />
<slot class="p-[20px]"/>
<Footer />