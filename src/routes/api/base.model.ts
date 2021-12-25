export interface IHttpResponse {
    status: number,
}

export interface ISuccessHttpResponse<T> extends IHttpResponse {
    body: {
        message: string;
        data: T
    }
}

export interface IFailureHttpResponse extends IHttpResponse {
    body: {
        message: string;
        data: null
    }
}