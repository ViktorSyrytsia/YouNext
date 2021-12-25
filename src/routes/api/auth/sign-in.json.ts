import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api.json";

export const post: RequestHandler = (request) => {
    const username = (request.body as any).username;
    const password = (request.body as any).password;
    const response = api({ ...request, method: "GET" });

    if (response.body) {
        if (password === response.body.password && username === response.body.username) {

        }
    }

    return {
        status: 200,
        body: {}
    }
}