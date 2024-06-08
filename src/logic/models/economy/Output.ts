import Good from "./Good";

export default class Output {
    value: number;
    goods: Map<Good, number>;
  
    constructor(value: number, goods: Map<Good, number>) {
        this.value = value;
        this.goods = goods;
    }
  
}