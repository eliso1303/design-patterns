import {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk
} from "./index"


let acrylicInk = new AcrylicInk();
let alcoholInk = new AlcoholInk();
let epsonPrinter = new EpsonPrinter(acrylicInk);
let hpPrinter = new HPprinter(alcoholInk);
console.log(epsonPrinter.print());
console.log(hpPrinter.print());

