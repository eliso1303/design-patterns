export type InkType = "acrylic-based" | "alcohol-based";

export interface IPrinter {
    ink: IInk;
}

export interface IInk {
    type: InkType;
    get: () => InkType;
}