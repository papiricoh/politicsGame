import Law from "../../Law";
import { LawCategory } from "../../LawCategory";
import { EconomicLawType } from "./EconomicLawType";

export default class EconomicLaw extends Law{
    type: EconomicLawType;

    constructor(type: EconomicLawType) {
        super(type.toString(), LawCategory.Economy);
        this.type = type;
    }

    
    getModifiers(): string {
        return "";
    }
}