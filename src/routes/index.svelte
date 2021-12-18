<svelte:head>
    <title>Welocom to NextYou</title>
</svelte:head>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    Welcome to NextYou!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">
    Select one of your teams or create a new one
</h2>
<div class="flex justify-center gap-4 mt-10">
    <a
        href="/sign-up"
        class="w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-2 border-gray-200 transition-shadow flex flex-col justify-center items-center"
    >
        <img class="w-16" src="/icons/pencil-alt.svg" alt="" />
        <div class="font-bold text-gray-700 mt-2 text-md uppercase">
            Create team
        </div>
    </a>
    <a
        href="/sign-in"
        class="w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-2 border-gray-200 transition-shadow flex flex-col justify-center items-center"
    >
        <img class="w-16" src="/icons/user-group.svg" alt="" />
        <div class="font-bold text-gray-700 mt-2 text-md uppercase">Select</div>
    </a>
</div>
