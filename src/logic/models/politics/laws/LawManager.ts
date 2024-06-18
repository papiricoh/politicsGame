import Law from "./Law";
import { LawCategory } from "./LawCategory";

export default class LawManager {
    activeLaws: Map<LawCategory, Law>;
    allLaws: Map<LawCategory, Law[]> = new Map([
        [LawCategory.Economy, [
            new Law("Laissez faire", LawCategory.Economy),
            new Law("Intervencionism", LawCategory.Economy),
            new Law("Feudalism", LawCategory.Economy),
            new Law("Command Economy", LawCategory.Economy)
        ]]
        
    ])


    constructor(activeLaws: Map<LawCategory, Law> | undefined) {
        if(!activeLaws) {
            this.activeLaws = new Map<LawCategory, Law>();
        }else {
            this.activeLaws = activeLaws;
        }
    }


}