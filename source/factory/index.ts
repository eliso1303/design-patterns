import { BMWType, IBMW } from "./interfaces";

class BmwFactory {
    static create(type: BMWType) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements IBMW {
    constructor(public model: BMWType, public price: number, public maxSpeed: number) { }
}

export default BmwFactory;