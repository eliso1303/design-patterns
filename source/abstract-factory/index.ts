import { DroidType, IdroidProducer } from "./interfaces"

function droidProducer(kind: DroidType): () => IdroidProducer {
    if (kind === 'battle') {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

class B1 implements IdroidProducer {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements IdroidProducer {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;