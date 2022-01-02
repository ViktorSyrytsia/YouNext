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

<div>Hello Team-List works fine!{teams.length}</div>
