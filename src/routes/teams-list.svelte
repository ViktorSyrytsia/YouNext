<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import type { Team } from "./api/teams/team.model";

    export const load: Load = async ({ fetch }) => {
        const res = await fetch("/api/teams.json");
        if (res.ok) {
            return {
                props: {
                    teams: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not load /api/teams.json`),
        };
    };
</script>

<script lang="ts">
    export let teams: Team[];
    console.log(teams);
</script>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    Select one of your teams!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">
    Click on your team to start meeting
</h2>

{#if teams.length > 0}
    <div
        class="p-5 flex flex-wrap w-1/4 border-dashed border-4 border-gray-400 rounded-md mx-auto mt-10"
    >
        {#each teams as team, index}
            <a
                href={"/" + index + "-team"}
                class="m-2 w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-1 border-gray-200 transition-shadow flex flex-col justify-center items-center"
            >
                <div
                    class="bg-teal-500 rounded-full w-14 h-14 flex justify-center items-center"
                >
                    <div class="text-white font-semibold text-2xl">
                        {team.name &&
                            team.name[0].toUpperCase() +
                                team.name[1].toUpperCase()}
                    </div>
                </div>
                <div class="font-bold text-gray-700 mt-2">{team.name}</div>
            </a>
        {/each}
    </div>
{:else}
    <div>There no teams yet</div>
{/if}
