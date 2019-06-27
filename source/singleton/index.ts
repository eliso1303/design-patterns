import { InstanceType } from "./interfaces"

class Person {
    static instance: InstanceType;
    constructor() {
        // do we have it or not
        if (Person.instance) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;