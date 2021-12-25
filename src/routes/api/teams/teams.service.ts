export const createTeam = (name: string, members: string[] = []) => {
    return {
        name,
        members
    }
}