import {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand
} from "./index"


let turbine = new Turbine();
let onCommand = new OnCommand(turbine);
let offCommand = new OffCommand(turbine);
let cockpit = new Cockpit(onCommand);
console.log(cockpit);