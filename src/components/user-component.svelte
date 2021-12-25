<script lang="ts">
    import type { ICurrentUser } from "src/routes/api/models";

    export let currentUser: ICurrentUser;
</script>

<div
    class="h-24 w-96 rounded-md shadow-md p-5 mx-auto my-10 flex justify-between items-center hover:shadow-xl transition-shadow"
>
    <div
        class="bg-teal-500 rounded-full w-14 h-14 flex justify-center items-center"
    >
        <div class="text-white font-semibold text-2xl">
            {currentUser
                ? currentUser.username[0]?.toUpperCase() +
                  currentUser.username[1]?.toUpperCase()
                : "JD"}
        </div>
    </div>
    <div class="grow flex justify-center">
        {#if currentUser}
            <span class="font-bold text-gray-400 px-6"
                >{currentUser.username}</span
            >
        {:else}
            <div class="px-6">
                <a
                    class="cursor-pointer text-teal-500 font-bold"
                    href="/sign-in"
                    >Login
                </a><span class="font-bold text-gray-400">or </span><a
                    class="cursor-pointer text-teal-500 font-bold"
                    href="/sign-up"
                    >Create
                </a><span class="font-bold text-gray-400">a new account</span>
            </div>
        {/if}
    </div>
</div>
