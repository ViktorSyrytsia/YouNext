import type { Request } from "@sveltejs/kit";
import type { ICurrentUser } from "./auth.model";

let currentUser: ICurrentUser = null;

export const api = (request: Request, user?: ICurrentUser): { status: number, body: any } => {
    let body = {};
    let status = 500;
    switch (request.method.toUpperCase()) {
        case "GET":
            body = currentUser;
            status = 200;
            break;
        case "POST":
            currentUser = user;
            body = currentUser;
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