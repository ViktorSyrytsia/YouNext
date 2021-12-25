<script lang="ts">
    import { signInRequest } from "./api/auth/methods";
    const pageTitle = "I need to know your name first";

    const onSignIn = (event: any): void => {
        event.preventDefault();
        signInRequest(event.target)
            .then(() => window.history.back())
            .catch((err) => console.log(err));
    };
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
        on:submit={(e) => onSignIn(e)}
        class="border-1 border-gray-200 mt-10 p-10 rounded-md shadow-md w-96"
    >
        <div class="input-wrapper">
            <label for="name">Enter you username:</label>
            <input placeholder="John Doe" type="text" name="username" />
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
