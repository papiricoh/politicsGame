import MathUtils from "../../utils/MathUtil";

export default class Good {
    name: string;
    base_price: number;
    supply: number;
    demand: number;

  
    constructor(name: string, base_price: number, initialSupply: number, initialDemand: number, ) {
        this.name = name;
        this.base_price = base_price;
        this.demand = initialDemand;
        this.supply = initialSupply;
        
    }

    changeSuppy(change: number) {
        this.supply += change;
        if(this.supply < 0) {
            this.supply = 0;
        }
    }

    
    changeDemmand(change: number) {
        this.demand += change;
        if(this.demand < 0) {
            this.demand = 0;
        }
    }

    getPrice(): number {
        const demandSupplySum = this.demand + this.supply;
        if (demandSupplySum === 0) {
          return this.base_price;
        }
    
        const priceAdjustment = (this.demand - this.supply) / demandSupplySum;
    
        // Define el multiplicador basado en la relación demanda/oferta
        let adjustmentFactor = 1;
        if (this.demand > this.supply) {
          adjustmentFactor = 1 + Math.abs(priceAdjustment) * 4; 
        }
    
        // Aplicar el ajuste de precio multiplicado por el factor de ajuste
        const adjustedPrice = this.base_price * (1 + priceAdjustment * adjustmentFactor);
    
        console.log("loaded price");
        
        return MathUtils.roundToDecimals(adjustedPrice, 2);
      }
  
}