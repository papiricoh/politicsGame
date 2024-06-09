import Tickeable from "../Interfaces/Tickeable";
import { GoodTypes } from "../models/economy/Enums/GoodTypes";
import Factory from "../models/economy/Factory";
import Good from "../models/economy/Good";

export default class Economy implements Tickeable {
    type: string;
    
    factories: Factory[];
    goods: Map<GoodTypes, Good>;
    unemployed: number;
    vacants: number;

    constructor(type: string, factories: Factory[], goods: Map<GoodTypes, Good>) {
        this.type = type;
        this.factories = factories;
        this.goods = goods;
        this.unemployed = 0;
        this.vacants = 0;
    }

    tick(): void {
        
    }

    populateEconomy(activePopulation: number): void {
        let vacants = 0;
        for (const factory of this.factories) {
            let maxWorkers = factory.getMaxWorkers();
            if(activePopulation === 0) {
                vacants += activePopulation;
            }else if(maxWorkers < activePopulation) {
                factory.workers = maxWorkers;
                activePopulation -= maxWorkers;
            }else if(maxWorkers >= activePopulation) {
                factory.workers = activePopulation;
                activePopulation = 0; //Check 0
                vacants += factory.workers - maxWorkers;
            }

        }
        this.unemployed = activePopulation;
        this.vacants = Math.abs(vacants);

    }
  
}