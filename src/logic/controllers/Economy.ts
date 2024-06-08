import Tickeable from "../Interfaces/Tickeable";
import { GoodTypes } from "../models/economy/Enums/GoodTypes";
import Factory from "../models/economy/Factory";
import Good from "../models/economy/Good";

export default class Economy implements Tickeable {
    type: string;
    
    factories: Factory[];
    goods: Map<GoodTypes, Good>;

    constructor(type: string, factories: Factory[], goods: Map<GoodTypes, Good>) {
        this.type = type;
        this.factories = factories;
        this.goods = goods;
    }

    tick(): void {
        
    }
  
}