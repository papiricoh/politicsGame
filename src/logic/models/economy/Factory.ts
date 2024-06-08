import Good from "./Good";
import NeededGood from "../../controllers/NeededGood";

export default class Factory {
    name: string;
    neededInput: NeededGood[];
    input: number[];
    output: Good[];
    size: number;
    workers: number;
  
    constructor(name: string, neededGoods: NeededGood[], input: number[], output: Good[], size: number, workers: number) {
        this.name = name;
        this.neededInput = neededGoods;
        this.input = input;
        this.output = output;
        this.size = size;
        this.workers = workers;
    }

    checkProduction() {
        let neededImput = 0;
        for (let index = 0; index < this.neededInput.length; index++) {
            neededImput += this.neededInput[index].quantity;
        }
        let avariableInput: number = 0;
        for (let index = 0; index < this.neededInput.length; index++) {
            avariableInput += this.input[index];
        }
        let outputFactor = neededImput - avariableInput;

    }


    getOutput(): Number {

        return 0;
    }
  
}