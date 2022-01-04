<script lang="ts">
    import type { Team } from "src/routes/api/teams/team.model";

    export let index: number;
    export let team: Team;
</script>

<a
    href={"/" + index + "-team"}
    class="m-2 w-48 h-48 p-4 shadow-md rounded-md hover:shadow-xl cursor-pointer border-1 border-gray-200 transition-shadow flex flex-col justify-center items-center"
>
<div><div>x</div></div>
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
