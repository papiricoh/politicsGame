import { LawCategory } from "./LawCategory";
import { EconomicLawType } from "./types/economic/EconomicLawType";

export default abstract class Law {
    title: string;
    category: LawCategory;

    constructor(title: string, category: LawCategory) {
        this.title = title;
        this.category = category;
    }

    abstract getModifiers(): string;
}