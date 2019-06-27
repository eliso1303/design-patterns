export interface Isheep {
    name: string;
    weight: number;
    clone(): Iclone;
}

export interface Iclone {
    clone: () => Isheep; 
}