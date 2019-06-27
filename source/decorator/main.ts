import {
    Penne,
    SauceDecorator,
    CheeseDecorator
} from "./index"

let penne = new Penne();
let sauceDecorator = new SauceDecorator(penne);
let cheeseDecorator = new CheeseDecorator(sauceDecorator);
let cheeseDecorator2 = new CheeseDecorator(cheeseDecorator);

console.log(penne.getPrice());
console.log(sauceDecorator.getPrice());
console.log(cheeseDecorator.getPrice());