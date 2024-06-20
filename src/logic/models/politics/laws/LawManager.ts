import Law from "./Law";
import { LawCategory } from "./LawCategory";
import EconomicLaw from "./types/economic/EconomicLaw";
import { EconomicLawType } from "./types/economic/EconomicLawType";

export default class LawManager {
    activeLaws: Map<LawCategory, Law>;
    static allLaws: Map<LawCategory, Law[]> = new Map([
        [LawCategory.Economy, [
            new EconomicLaw(EconomicLawType.Intervencionism),
            new EconomicLaw(EconomicLawType.LaissezFaire),
            new EconomicLaw(EconomicLawType.Feudalism),
            new EconomicLaw(EconomicLawType.CommandEconomy)
        ]]
        
    ])


    constructor(activeLaws: Map<LawCategory, Law> | undefined) {
        if(!activeLaws) {
            this.activeLaws = this.generateDefaultLawMap();
        }else {
            this.activeLaws = activeLaws;
        }
    }
    
    generateDefaultLawMap(): Map<LawCategory, Law> {
        let map: Map<LawCategory, Law> = new Map<LawCategory, Law>();
        for (const lc of LawManager.allLaws.entries()) {
            map.set(lc[0], lc[1][0])
        }
        return map;
    }


}