import NeededGood from "./NeededGood";
import Output from "./Output";
import Good from "./Good";

export default class Factory {
    static defaultMaxWorkers: number = 1000;

    name: string;
    neededInput: NeededGood[];
    input: number[];
    output: Map<Good, number>;
    size: number;
    workers: number; //1000 workers per level
  
    constructor(name: string, neededGoods: NeededGood[], input: number[], output: Map<Good, number>, size: number, workers: number) {
        this.name = name;
        this.neededInput = neededGoods;
        this.input = input;
        this.output = output;
        this.size = size > 0 ? size : 1;
        this.workers = workers;
    }

    getProductionFactor(): number {
        let neededImput = 0;
        for (let index = 0; index < this.neededInput.length; index++) {
            neededImput += this.neededInput[index].quantity;
        }
        let avariableInput: number = 0;
        for (let index = 0; index < this.neededInput.length; index++) {
            avariableInput += this.input[index];
        }
        let outputFactor =  avariableInput / neededImput;

        return outputFactor;
    }

    getWorkerFactor(): number {
        let maxWorkers = Factory.defaultMaxWorkers * this.size;
        let workerFactor = this.workers / maxWorkers;

        return (this.size * workerFactor);
    }

    getMaxWorkers(): number {
        return 1000 * this.size;
    }


    getOutput(): Output {
        let map: Map<Good, number> = new Map<Good, number>();
        let prodValue: number = 0;
        for (const stack of this.output.entries()) {
            let quantity: number = Number((stack[1] * this.getProductionFactor() * this.getWorkerFactor()).toFixed()) * Number((this.workers / Factory.defaultMaxWorkers).toFixed());
            map.set(stack[0], quantity);
            prodValue += stack[0].getPrice() * quantity
        }
        
        return new Output(prodValue, map);
    }
  
}