<script lang="ts">
    import { signUpRequest } from "./api/methods";
    const pageTitle: string = "I need to know your name first";

    const onSignUp = (event: any): void => {
        event.preventDefault();
        signUpRequest(event.target)
            .then((res) => console.log(res))
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
    Enter your name and set a password
</h2>

<div class="flex justify-center">
    <form
        on:submit={(e) => onSignUp(e)}
        class="border-1 border-gray-200 mt-10 p-10 rounded-md shadow-md w-96"
    >
        <div class="input-wrapper">
            <label for="name">Enter you username:</label>
            <input
                autocomplete="off"
                placeholder="John Doe"
                type="text"
                name="username"
            />
        </div>
        <div class="input-wrapper">
            <label for="password">Your password:</label>
            <input
                autocomplete="off"
                placeholder="MySecretPassword"
                type="password"
                name="password"
            />
        </div>
        <div class="input-wrapper">
            <label for="confirmPassword">Repeat password:</label>
            <input
                autocomplete="off"
                placeholder="MySecretPassword"
                type="password"
                name="confirmPassword"
            />
        </div>
        <div>
            <button class="filled--primary">sign-up</button>
            <button class="no-bg--primary">cancel</button>
        </div>
    </form>
</div>
