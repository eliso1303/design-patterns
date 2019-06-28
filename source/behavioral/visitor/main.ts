import {
    Developer,
    Manager,
    bonusVisitor
} from "./index"

let dev = new Developer(2000);
let manager = new Manager(1500);
manager.accept(bonusVisitor);
bonusVisitor(dev);