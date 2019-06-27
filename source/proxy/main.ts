import {
    Car,
    CarProxy,
    Driver
} from "./index"

let car = new Car();
let driver = new Driver(20);
let carproxy = new CarProxy(driver);

console.log(carproxy.drive());