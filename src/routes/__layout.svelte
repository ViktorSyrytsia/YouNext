<script>
    import "../app.css";
</script>

<slot />

<style>
    /* ================================ INPUTS ================================ */
    :global(.input-wrapper) {
        @apply my-3 flex flex-col;
    }
    :global(.input-wrapper label) {
        @apply text-gray-400 my-2;
    }
    :global(.input-wrapper input) {
        @apply focus:outline-none border rounded-md p-2 focus:border-teal-500 placeholder:text-gray-300;
    }
    
    /* ================================ BUTTONS================================ */
    :global(.filled--primary) {
        @apply mr-2 bg-teal-500 rounded-md text-white font-semibold px-3 py-2 capitalize hover:bg-teal-600 transition-colors focus:outline-none focus:ring focus:ring-teal-100;
    }
    :global(.no-bg--primary) {
        @apply mr-2 rounded-md text-teal-500 font-semibold px-3 py-2 capitalize hover:text-teal-600 transition-colors focus:outline-none focus:ring focus:ring-teal-100;
    }
</style>
