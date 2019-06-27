export type InstanceType = object | void;

export default interface IPerson {
    constructor: () => IPerson; 
}