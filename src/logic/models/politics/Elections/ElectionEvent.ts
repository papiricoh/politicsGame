import MathUtils from "../../../utils/MathUtil";
import Party from "../Party";


export default class ElectionEvent {
    title: string;
    desc: string;
    perpetrator: Party;
    victim: Party;
    currentPredictions: Map<Party, number>;
    variationFactor: number;
    exitFuntion: (p: Party, pv: number, v: Party, vv: number) => void;

    constructor(title: string, desc: string, perpetrator: Party, victim: Party, currentPredictions: Map<Party, number>, variationFactor: number, exitFuntion: (p: Party, pv: number, v: Party, vv: number) => void) {
        this.title = title;
        this.desc = desc;
        this.perpetrator = perpetrator;
        this.victim = victim;
        this.currentPredictions = currentPredictions;
        this.variationFactor = variationFactor;
        this.exitFuntion = exitFuntion;
        
    }

    selectPerpetratorOption(): void {
        let perpetratorVotes: number = this.currentPredictions.get(this.perpetrator)!;
        let victimVotes: number = this.currentPredictions.get(this.victim)!;

        perpetratorVotes = perpetratorVotes * (1 + this.variationFactor);
        victimVotes = victimVotes * this.variationFactor;

        this.exitFuntion(this.perpetrator, MathUtils.roundToInt(perpetratorVotes), this.victim, MathUtils.roundToInt(victimVotes));
    }

    
    selectVictimOption(): void {
        let perpetratorVotes: number = this.currentPredictions.get(this.perpetrator)!;
        let victimVotes: number = this.currentPredictions.get(this.victim)!;

        perpetratorVotes = perpetratorVotes * this.variationFactor;
        victimVotes = victimVotes * (1 + this.variationFactor);

        this.exitFuntion(this.perpetrator, MathUtils.roundToInt(perpetratorVotes), this.victim, MathUtils.roundToInt(victimVotes));
    }   

}
