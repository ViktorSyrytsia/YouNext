<script lang="ts">
    import type { ICurrentUser } from "src/routes/api/models";

    export let currentUser: ICurrentUser;
</script>

<div class="bg-teal-200 w-56 h-56">{currentUser ? currentUser.username : 'hello'}</div>
