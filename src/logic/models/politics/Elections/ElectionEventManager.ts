import Game from "../../../Game";
import Tickeable from "../../../Interfaces/Tickeable";
import TickManager from "../../../utils/TickManager";
import Party from "../Party";
import ElectionEvent from "./ElectionEvent";

export default class ElectionEventManager implements Tickeable {
    static standardElectionTime: number = 200; //200 ticks of elections


    currentPredictions: Map<Party, number>;
    tickManager: TickManager;
    startElection: Date;
    currentEvent: ElectionEvent | undefined;

    constructor(currentPredictions: Map<Party, number>) {
        this.currentPredictions = currentPredictions;
        this.tickManager = Game.getInstance().getTickManager();
        this.startElection = new Date();

    }


    tick(): void {
        if(!this.currentEvent && Math.random() > 0.25) {
            this.currentEvent = this.generateRandomEvent();
        }
    }

    getCurrentEvent(): ElectionEvent | undefined {
        return this.currentEvent;
    }

    generateRandomEvent(): ElectionEvent {
        throw new Error("Method not implemented.");
    }

    

}
