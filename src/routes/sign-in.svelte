<script>
    const pageTitle = "I need to know your name first"
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    {pageTitle}!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">
    Enter your name and password
</h2>

<div class="flex justify-center">
    <form
        action=""
        class="border-1 border-gray-200 mt-10 p-10 rounded-md shadow-md w-96"
    >
        <div class="input-wrapper">
            <label for="name">Enter you username:</label>
            <input placeholder="John Doe" type="text" name="password" />
        </div>
        <div class="input-wrapper">
            <label for="password">Your password:</label>
            <input
                placeholder="MySecretPassword"
                type="password"
                name="password"
            />
        </div>
        <div>
            <button class="filled--primary">sign-in</button>
            <button class="no-bg--primary">cancel</button>
        </div>
    </form>
</div>

<style>
    .input-wrapper {
        @apply my-3 flex flex-col;
    }
    .input-wrapper label {
        @apply text-gray-400 my-2;
    }
    .input-wrapper input {
        @apply focus:outline-none border rounded-md p-2 focus:border-teal-500 placeholder:text-gray-300;
    }
    .filled--primary {
        @apply mr-2 bg-teal-500 rounded-md text-white font-semibold px-3 py-2 capitalize hover:bg-teal-600 transition-colors focus:outline-none focus:ring focus:ring-teal-100;
    }
    .no-bg--primary {
        @apply mr-2 rounded-md text-teal-500 font-semibold px-3 py-2 capitalize hover:text-teal-600 transition-colors focus:outline-none focus:ring focus:ring-teal-100;
    }
</style>
