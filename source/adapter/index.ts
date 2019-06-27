import {ISoldier, IJadi, IAdapter} from "./interfaces"

class Soldier implements ISoldier{
    constructor(public level: number) {}

    attack() {
        return this.level * 1;
    }
}

class Jedi implements IJadi {
    constructor(public level: number) {}

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements IAdapter {
    constructor(public jedi: IJadi) {}

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};