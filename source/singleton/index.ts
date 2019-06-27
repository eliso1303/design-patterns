import IPerson, { InstanceType } from "./interfaces"

// class Person implements IPerson {
class Person {
    static instance: InstanceType;
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;