import type { RequestHandler } from "@sveltejs/kit";
import type { ICurrentUser } from "./models";

//TODO: Persist in database
let currentUser: ICurrentUser = null;


export const get: RequestHandler = () => {
    return {
        status: 200,
        body: "Hello API"
    }
}

export const post: RequestHandler = (request) => {
    console.log(request);
    
    return {
        status: 200,
        body: { message: "Passwords must match" },

    }


}