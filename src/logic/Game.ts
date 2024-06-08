import { GoodTypes } from "./models/economy/Enums/GoodTypes";
import Good from "./models/economy/Good";

export default class Game {
    static defaultGoods: Map<GoodTypes, Good> = new Map([
        [GoodTypes.Iron, new Good(GoodTypes.Iron, 25, 5000, 4000)],
        [GoodTypes.Copper, new Good(GoodTypes.Copper, 20, 4000, 3500)],
        [GoodTypes.Crude, new Good(GoodTypes.Crude, 60, 6000, 5500)],
        [GoodTypes.Wheat, new Good(GoodTypes.Wheat, 5, 8000, 7500)],
        [GoodTypes.Cotton, new Good(GoodTypes.Cotton, 12, 7000, 6500)],
        [GoodTypes.Steel, new Good(GoodTypes.Steel, 40, 3000, 2500)],
        [GoodTypes.Plastic, new Good(GoodTypes.Plastic, 1.8, 3500, 3000)],
        [GoodTypes.Flour, new Good(GoodTypes.Flour, 0.8, 5000, 4500)],
        [GoodTypes.Fabric, new Good(GoodTypes.Fabric, 1.2, 4000, 3800)],
        [GoodTypes.Apple, new Good(GoodTypes.Apple, 1.0, 1000, 1000)],
        [GoodTypes.Car, new Good(GoodTypes.Car, 20000, 500, 400)],
        [GoodTypes.Smartphone, new Good(GoodTypes.Smartphone, 1000, 1500, 1400)],
        [GoodTypes.Bread, new Good(GoodTypes.Bread, 2, 3000, 2800)],
        [GoodTypes.Shirt, new Good(GoodTypes.Shirt, 25, 2000, 1800)],
        [GoodTypes.Laptop, new Good(GoodTypes.Laptop, 1500, 1000, 900)],
        [GoodTypes.Bicycle, new Good(GoodTypes.Bicycle, 500, 1200, 1100)],
        [GoodTypes.Furniture, new Good(GoodTypes.Furniture, 800, 800, 700)],
        [GoodTypes.Toy, new Good(GoodTypes.Toy, 20, 2500, 2300)],
        [GoodTypes.Book, new Good(GoodTypes.Book, 15, 3000, 2700)],
      ]);

    gameInit(): void {

    }
  
}
  