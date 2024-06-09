import NeededGood from "./models/economy/NeededGood";
import Country from "./controllers/Country";
import Economy from "./controllers/Economy";
import Government from "./controllers/Government";
import { GoodTypes } from "./models/economy/Enums/GoodTypes";
import Factory from "./models/economy/Factory";
import Good from "./models/economy/Good";
import TickManager from "./utils/TickManager";
import Tickeable from "./Interfaces/Tickeable";

export default class Game implements Tickeable{

    private static instance: Game;
    private playerCountry: Country;
    private tickManager: TickManager;
    private countries: Country[];

    constructor() { //GameInit
        Game.instance = this;

        let goods: Map<GoodTypes, Good> = new Map<GoodTypes, Good>();

        for (const good of Game.defaultGoods.values()) {
            goods.set(good.name, good);
        }

        let factories = [new Factory("test", [new NeededGood(1, Game.defaultGoods.get(GoodTypes.Wheat) ?? new Good(GoodTypes.None, 1, 1, 1))], [1], new Map<Good, number>([[Game.defaultGoods.get(GoodTypes.Iron) ?? new Good(GoodTypes.None, 1, 1, 1), 2]]), 40, 1500)]
        
        

        let economy = new Economy("intervencionism", factories, goods);

        this.playerCountry = new Country("player", new Government("Democracy"), 1000020, economy);
        
        this.countries = [];
        this.countries.push(this.playerCountry);


        this.tickManager = new TickManager();
        this.tick();
        this.tickManager.startTick(1000, this.tick)
    }

    tick(): void {
        console.log("Tick");
        for (const country of Game.getInstance().countries) {
            country.tick();
        }
    }

    public static getInstance(): Game {
        if(Game.instance == null) {
            Game.instance = new Game();
        }
        return Game.instance;
    }

    public getTickManager(): TickManager {
        return this.tickManager;
    }



    getPlayerCountry(): Country {
        return this.playerCountry;
    }

    stopGame(): void {
        this.tickManager.stopTick();
    }


    //Default variables
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

  
}
  