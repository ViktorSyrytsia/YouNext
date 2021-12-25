import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api.json";

export const post: RequestHandler = (request) => {
    const currentUser = request.body as any;
    return api(request, currentUser)
}