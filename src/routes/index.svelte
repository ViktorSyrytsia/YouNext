<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import type { ICurrentUser } from "./api/models";

    export const load: Load = async ({ fetch }) => {
        const res = await fetch("/api.json");
        if (res.ok) {
            return {
                props: {
                    currentUser: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not load /api.json`),
        };
    };
</script>

<script lang="ts">
    import UserComponent from "../components/user-component.svelte";
    const pageTitle = "Welcome to NextYou";
    export let currentUser: ICurrentUser;
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    {pageTitle}!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">
    Select team or create a new one!
</h2>
<UserComponent {currentUser} />
<div class="flex justify-center gap-4 mt-20">
    <a
        href="/sign-up"
        class="w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-1 border-gray-200 transition-shadow flex flex-col justify-center items-center"
    >
        <img class="w-16" src="/icons/pencil-alt.svg" alt="" />
        <div class="font-bold text-gray-700 mt-2 text-md uppercase">
            Create team
        </div>
    </a>
    <a
        href="/sign-in"
        class="w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-1 border-gray-200 transition-shadow flex flex-col justify-center items-center"
    >
        <img class="w-16" src="/icons/user-group.svg" alt="" />
        <div class="font-bold text-gray-700 mt-2 text-md uppercase">Select</div>
    </a>
</div>
