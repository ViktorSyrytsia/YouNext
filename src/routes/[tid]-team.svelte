<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ page }) => {
        const id = page.params.tid;
        console.log(id);

        return {
            props: {
                id,
            },
        };
    };
</script>

<script lang="ts">
    export let id: string;
</script>

<h2>team id works!!!{id}</h2>
