import Government from "./Government";
import Economy from "./Economy";
import Tickeable from "../Interfaces/Tickeable";
import PopulationUnit from "../models/population/PopulationUnit";

export default class Country implements Tickeable {
    name: string;
    governmentForm: Government;
    population: PopulationUnit[];
    economy: Economy;
  
    constructor(name: string, governmentForm: Government, population: PopulationUnit[], economy: Economy) {
        this.name = name;
        this.population = population;
        this.governmentForm = governmentForm;
        this.economy = economy;
    }

    getActivePopulation(): number {
        //GOVERNMENT LAWS women / child labor
        let active_factor = 0.25;
        let total: number = 0;
        for (const popUnit of this.population) {
            total += popUnit.active_population;
        }
        return total;
    }

    getTotalPopulation(): number {
        let total: number = 0;
        for (const popUnit of this.population) {
            total += popUnit.total_population;
        }
        return total;
    }

    tick(): void {
        this.economy.populateEconomy(this.getActivePopulation());
        this.economy.tick();
    }


}
  