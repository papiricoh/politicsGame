import Government from "./Government";
import Economy from "./Economy";
import Tickeable from "../Interfaces/Tickeable";
import PopulationUnit from "../models/population/PopulationUnit";
import { IdeologicalGroup } from "../models/politics/Enums/IdeologicalGroup";
import MathUtils from "../utils/MathUtil";
import Party from "../models/politics/Party";

export default class Country implements Tickeable {
    name: string;
    government: Government;
    population: PopulationUnit[];
    economy: Economy;
  
    constructor(name: string, government: Government, population: PopulationUnit[], economy: Economy) {
        this.name = name;
        this.population = population;
        this.government = government;
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

    startElections(): void {
        //Change pops
        this.shufflePops()

        this.government.startElection(this.population);
    }

    private shufflePops() {
        let numIdeologies: number = Object.keys(IdeologicalGroup).length;
        let biggerParty: Party = this.government.getBiggerParty();

        let variationFactor: number = MathUtils.getRandomInt(50);
        if(this.government.parties.get(biggerParty)! < this.government.pmMaxSeats / 3) {//TODO bypass shuffle
            variationFactor = MathUtils.getRandomInt(20);
        }

        let decadenceIdeology: IdeologicalGroup = biggerParty.ideological_group;
        let ideologicalPop: PopulationUnit = this.findPopbyIdeology(decadenceIdeology);
        let randomMigrationFactor: number = MathUtils.roundToInt(ideologicalPop.total_population * (variationFactor / 100));
        ideologicalPop.total_population -= randomMigrationFactor;
        ideologicalPop.updateActivePops();
        if (ideologicalPop.total_population < 1) {
            let popIndex: number = this.population.indexOf(ideologicalPop);
            this.population.splice(popIndex, popIndex + 1);
        }

        let randomIdeology: IdeologicalGroup = Object.values(IdeologicalGroup)[MathUtils.getRandomInt(numIdeologies)]; //TODO: Critery of new ideology tendecies
        let migrationTargetPop: PopulationUnit = this.findPopbyIdeology(randomIdeology);
        if(migrationTargetPop == null) {
            migrationTargetPop = new PopulationUnit(10, randomIdeology, randomMigrationFactor, 0.25);
            this.population.push(migrationTargetPop);
        }else {
            migrationTargetPop.total_population += randomMigrationFactor;
        }

    }



    private findPopbyIdeology(ig: IdeologicalGroup): any {
        for (const pop of this.population) {
            if(pop.ideology == ig) {
                return pop;
            }
        }
        return null;
    }

    tick(): void {
        this.economy.populateEconomy(this.getActivePopulation());
        this.economy.tick();
    }


}
  