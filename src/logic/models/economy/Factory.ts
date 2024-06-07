import Good from "./Good";
import NeededGood from "../../controllers/NeededGood";

export default class Factory {
    name: string;
    neededInput: NeededGood[];
    input: number[];
    output: Good[];
    size: number;
  
    constructor(name: string, neededGoods: NeededGood[], input: number[], output: Good[], size: number) {
        this.name = name;
        this.neededInput = neededGoods;
        this.input = input;
        this.output = output;
        this.size = size;

    }



    getOutput(): Number {
        
        return 0;
    }
  
}