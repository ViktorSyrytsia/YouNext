import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api.json";

export const get: RequestHandler = (request) => {
    return api(request)
}