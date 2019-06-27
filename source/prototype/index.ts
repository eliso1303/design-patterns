import { Isheep, Iclone } from "./interfaces"

class Sheep implements Isheep, Iclone {
    constructor(public name: string, public weight: number) { }

    clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;