import { ITrafficTower, IAirplane } from "./interfaces"

class TrafficTower implements ITrafficTower{
    airplanes: IAirplane[];
    constructor() {
        this.airplanes = [];
     }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane implements IAirplane {
    constructor(public position: number = position, public trafficTower: ITrafficTower = trafficTower) {
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane
};