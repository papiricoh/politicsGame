import Tickeable from "../Interfaces/Tickeable";
import Factory from "./economy/Factory";
import Good from "./economy/Good";

export default class Economy implements Tickeable {
    type: string;
    
    factories: Factory[];
    goods: Map<Good, number>;
  
    constructor(type: string, factories: Factory[], goods: Map<Good, number>) {
        this.type = type;
        this.factories = factories;
        this.goods = goods;
    }

    tick(): void {
        
    }
  
}