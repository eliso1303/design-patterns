export interface ISoldier {
    level: number;
    attack() : number
}
export interface IJadi {
    level: number;
    attackWithSaber(): number
}

export interface IAdapter {
    jedi: IJadi;
    attack(): number
}