
export interface IRequest {
    url: string;
    method: string;
    payload: {};
}

export interface IRequestBuilder {
    forUrl(url: string): IRequestBuilder;
    useMethod(method: string): IRequestBuilder;
    payload(payload: object): IRequestBuilder;
    build(): IRequest;
}