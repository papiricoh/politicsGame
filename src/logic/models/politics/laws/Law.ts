import { LawCategory } from "./LawCategory";

export default class Law {
    title: string;
    category: LawCategory;

    constructor(title: string, category: LawCategory) {
        this.title = title;
        this.category = category;
    }


}