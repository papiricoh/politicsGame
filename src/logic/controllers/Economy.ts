import Tickeable from "../Interfaces/Tickeable";
import { GoodTypes } from "../models/economy/Enums/GoodTypes";
import Factory from "../models/economy/Factory";
import Good from "../models/economy/Good";
import Output from "../models/economy/Output";

export default class Economy implements Tickeable {
    type: string;
    
    factories: Factory[];
    goods: Map<GoodTypes, Good>;
    unemployed: number;
    vacants: number;
    gdp: number;

    constructor(type: string, factories: Factory[], goods: Map<GoodTypes, Good>) {
        this.type = type;
        this.factories = factories;
        this.goods = goods;
        this.unemployed = 0;
        this.vacants = 0;
        this.gdp = 0;
    }

    tick(): void {
        
    }

    populateEconomy(activePopulation: number): void {
        let vacants = 0;
        let goodsMap: Map<GoodTypes, Good> = new Map(this.goods);
        for (const good of goodsMap.values()) {
            good.supply = 0; //reset goods
        }
        
        let gdp = 0;
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
            //Change goods supply
            let output: Output = factory.getOutput()
            for (const good of output.goods.entries()) {
                goodsMap.get(good[0].name)!.supply += good[1];
            }
            gdp += output.value;
        }
        this.unemployed = activePopulation;
        this.vacants = Math.abs(vacants);
        this.gdp = gdp;
    }
  
}