import Government from "./Government";
import Economy from "./Economy";
import Tickeable from "../Interfaces/Tickeable";

export default class Country implements Tickeable {
    name: string;
    governmentForm: Government;
    population: number;
    economy: Economy;
  
    constructor(name: string, governmentForm: Government, population: number, economy: Economy) {
        this.name = name;
        this.population = population;
        this.governmentForm = governmentForm;
        this.economy = economy;
    }

    getActivePopulation(): number {
        //GOVERNMENT LAWS women / child labor

        return this.population * 0.25;
    }

    tick(): void {
        
        this.economy.populateEconomy(this.getActivePopulation());
        this.economy.tick();
    }


}
  