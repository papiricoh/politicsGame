import Government from "./Government";
import Economy from "./Economy";

export default class Country {
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
  
}
  