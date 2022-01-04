import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api.json";

export const del: RequestHandler = (request) => {
    return api(request)
}
