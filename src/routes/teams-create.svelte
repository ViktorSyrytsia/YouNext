<script lang="ts">
    let teamName: string = "";
    let memberCounter = 0;
    let members: number[] = [];

    const onTeamCreate = (e) => {
        const teamname = e.target.name.value;
        const teamMembers = [];
        members.forEach((element) => {
            teamMembers.push(e.target[element].value);
        });
        // postData("/api/teams.json", { name: "Fist Team" }).then((res) => {
        //     console.log({ res });
        // });
    };
    const addMember = () => {
        members = [...members, ++memberCounter];
    };
    const removeMember = (i: number) => {
        members = members.filter((_, index) => index !== i);
    };
</script>

<h1 class="text-5xl font-bold mt-20 p-6 text-center text-gray-800">
    Create new team!
</h1>
<h2 class="text-4xl font-bold text-center text-teal-500">{teamName}</h2>
<div class="flex justify-center">
    <form
        on:submit|preventDefault={onTeamCreate}
        class="border-1 border-gray-200 mt-10 p-10 rounded-md shadow-md w-96"
    >
        <div class="input-wrapper">
            <label for="name">Enter team name:</label>
            <input
                on:input={(e) => (teamName = e.target.value)}
                placeholder="My Lovely team"
                type="text"
                name="name"
            />
        </div>
        {#each members as member, index (member)}
            <div class="input-wrapper">
                <label for="name">Enter member name:</label>
                <div class="flex">
                    <input
                        class="grow"
                        placeholder="John Doe"
                        type="text"
                        name={`${index}`}
                    />
                    <button
                        on:click|preventDefault={() => removeMember(index)}
                        class="filled--primary"
                        style="margin-right: 0px; margin-left: 8px">-</button
                    >
                </div>
            </div>
        {/each}
        <div class="flex justify-center mb-10 mt-5">
            <button on:click|preventDefault={addMember} class="filled--primary"
                >Add member</button
            >
        </div>

        <div>
            <button disabled={!(teamName && members.length > 0)} class="filled--primary">Create team</button>
            <button class="no-bg--primary">Back</button>
        </div>
    </form>
</div>
