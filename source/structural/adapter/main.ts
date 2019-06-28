import {
    Soldier,
    Jedi,
    JediAdapter
} from "./index"

let soldier = new Soldier(2);
let jedi = new Jedi(5);
let adaptedJedi = new JediAdapter(jedi);

console.log(soldier.attack());
console.log(jedi.attackWithSaber());
console.log(adaptedJedi.attack());
