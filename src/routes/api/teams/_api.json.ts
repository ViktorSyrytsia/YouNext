import type { Request } from "@sveltejs/kit";
import type { Team } from "./team.model";
import { createTeam } from "./teams.service";

const teams: Team[] = [{ name: 'MockTeam', members: [] }];

export const api = (request: Request, teamBody?: Team) => {
    let body = {};
    let status = 500;
    switch (request.method.toUpperCase()) {
        case "GET":
            body = teams;
            status = 200;
            break;
        case "POST":
            const team = createTeam(teamBody.name, teamBody.members);
            teams.push(team);
            body = teams;
            status = 200
            break;
        default:
            break;
    }
    return {
        body,
        status
    }
}