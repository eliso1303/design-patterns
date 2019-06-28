import { IRequest } from "./interfaces"
import { IRequestBuilder } from "./interfaces"

class Request implements IRequest {
    constructor(public url ='', public method ='', public payload = {}) { }
}

class RequestBuilder implements IRequestBuilder {
    request: Request;
    constructor() {
        this.request = new Request();
    }

    forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;