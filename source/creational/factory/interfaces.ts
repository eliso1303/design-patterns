export type BMWType = 'X5' | 'X6';

export interface IBMW {
    model: BMWType;
    price: number;
    maxSpeed: number;
}