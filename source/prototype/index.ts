import { Isheep } from "./interfaces"

class Sheep implements Isheep {
    constructor(public name: string, public weight: number) { }

    clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;