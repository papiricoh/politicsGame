import { IdeologicalGroup } from "./Enums/IdeologicalGroup";

export default class Party {
    name: string;
    ideological_group: IdeologicalGroup;
    color: string
    isNew: boolean;
  
    constructor(name: string, ideological_group: IdeologicalGroup, color: string, isNew: boolean) {
        this.name = name;
        this.ideological_group = ideological_group;
        this.color = color;
        this.isNew = isNew;
    }
    
    getAbreviation(): string {
        var str: string = "";
        var split = this.name.split(' ');
        for (const strs of split) {
            str += Array.from(strs)[0];
        }
        return str;
    }
  
}