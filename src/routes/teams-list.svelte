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
    import TeamCardComponent from "../components/team-card-component.svelte";
    export let teams: Team[];
    const onTeamDelete = (e: CustomEvent<{ id: number }>) => {
        fetch("/api/teams/" + e.detail.id + ".json", {
            method: "DELETE",
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                teams = res;
            })
            .catch((err) => {
                console.log({ err });
            });
    };
</script>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    Select one of your teams!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">
    Click on your team to start meeting
</h2>

{#if teams.length > 0}
    <div
        class="p-5 flex flex-wrap w-fit border-dashed border-4 border-gray-400 rounded-md mx-auto mt-10"
    >
        {#each teams as team, index}
            <TeamCardComponent
                on:onDelete={(e) => onTeamDelete(e)}
                {team}
                {index}
            />
        {/each}
    </div>
{:else}
    <div
        class="font-bold text-gray-800 text-xl text-center mt-10 border-dashed border-4 border-gray-400 rounded-md w-1/2 mx-auto p-10"
    >
        Oops...There are no teams yet. First you need to <span
            class="text-teal-500 cursor-pointer"
            ><a href="/teams-create">create</a></span
        > at least one
    </div>
{/if}
