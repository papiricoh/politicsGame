import { IdeologicalGroup } from "../politics/Enums/IdeologicalGroup";

export default class PopulationUnit {
    
    livingQuality: number;
    ideology: IdeologicalGroup;
    total_population: number;
    active_population!: number;

    constructor(livingQuality: number, ideology: IdeologicalGroup, total_population: number, active_factor: number) {
        this.livingQuality = livingQuality;
        this.ideology = ideology;
        this.total_population = total_population;
        this.setActivePop(active_factor);
    }

    setActivePop(factor: number): void {
        this.active_population = this.total_population * factor;
    }

}


