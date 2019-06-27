import RequestBuilder from "./index"

let request = new RequestBuilder();
console.log(request.forUrl('test').useMethod('userMeth').payload({ someobj: true }).build());