import Good from "../models/economy/Good";

export default class NeededGood {
    quantity: number;
    good: Good;
  
    constructor(quantity: number, good: Good) {
        this.quantity = quantity;
        this.good = good;
    }
  
}