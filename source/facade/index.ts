import { IDiscount, IShipping, IFees, IShopFacade } from "./interfaces"

class ShopFacade implements IShopFacade {
    constructor(public discount = new Discount(), public shipping = new Shipping(), public fees = new Fees() ) {}

    calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount implements IDiscount {
    calc(value: number) {
        return value * 0.9;
    }
}

class Shipping implements IShipping {
    calc() {
        return 5;
    }
}

class Fees implements IFees {
    calc(value: number) {
        return value * 1.05;
    }
}

export default ShopFacade;