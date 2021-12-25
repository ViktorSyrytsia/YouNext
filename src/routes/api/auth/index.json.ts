import type { RequestHandler } from "@sveltejs/kit";
import type { ICurrentUser, IFailureHttpResponse, ISuccessHttpResponse } from "../models";

//TODO: Persist in database
let currentUser: ICurrentUser = null;


export const get: RequestHandler = () => {
    console.log("GET: ", currentUser);

    return {
        status: 200,
        body: currentUser
    }
}

export const post: RequestHandler = (request): ISuccessHttpResponse<string> | IFailureHttpResponse => {
    console.log("POST: ",  request.body);

    currentUser = request.body as any;
    if (currentUser) {
        return {
            status: 200,
            body: {
                message: "User succesfully registered",
                data: currentUser.username
            }
        }
    } else {
        return {
            status: 500,
            body: {
                message: "Internal server error",
                data: null
            }
        }
    }
}