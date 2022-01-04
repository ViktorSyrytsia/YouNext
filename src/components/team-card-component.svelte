<script lang="ts">
    import type { Team } from "src/routes/api/teams/team.model";
    import { createEventDispatcher } from "svelte";

    export let index: number;
    export let team: Team;
    const dispatch = createEventDispatcher();

    const onTeamDelete = () => {
        dispatch("onDelete", {
            id: index,
        });
    };
</script>

<a
    href={"/" + index + "-team"}
    class="m-2 w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-1 border-gray-200 transition-shadow flex flex-col justify-between items-center"
>
    <div class="flex justify-end w-full">
        <div
            on:click|preventDefault={onTeamDelete}
            class="rounded bg-rose-600 text-white w-6 h-6  flex justify-center items-center p-1 hover:bg-rose-700"
        >
            <img src="/icons/trash.svg" alt="trash" />
        </div>
    </div>
    <div
        class="bg-teal-500 rounded-full w-14 h-14 flex justify-center items-center"
    >
        <div class="text-white font-semibold text-2xl">
            {team.name &&
                team.name[0].toUpperCase() + team.name[1].toUpperCase()}
        </div>
    </div>
    <div class="font-bold text-gray-700 mt-2">{team.name}</div>
</a>
