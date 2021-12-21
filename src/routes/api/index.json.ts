import type { Request, RequestHandler } from "@sveltejs/kit";
import type { ICurrentUser, IFailureHttpResponse, ISuccessHttpResponse } from "./models";

//TODO: Persist in database
let currentUser: ICurrentUser = null;


export const get: RequestHandler = () => {
    return {
        status: 200,
        body: "Hello API"
    }
}

export const post: RequestHandler = (request): ISuccessHttpResponse<string> | IFailureHttpResponse => {
    currentUser = request.body; //TODO: Persist in database
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