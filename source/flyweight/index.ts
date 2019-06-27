import { IColor, colorName } from "./interfaces"

class Color implements colorName {
    constructor(public name: string) { }
}

class colorFactory {
    colors = {} as IColor;
    constructor(public name: colorName) {}
    create(name: string) {
        let color = this.colors[name];
        if (color) return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    colorFactory
};
