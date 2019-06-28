export type colorName = {
    name: string;
}

export interface IColor {
    [color: string]: colorName;
}