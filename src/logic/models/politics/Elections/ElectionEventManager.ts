import Game from "../../../Game";
import Tickeable from "../../../Interfaces/Tickeable";
import TickManager from "../../../utils/TickManager";
import { IdeologicalGroup } from "../Enums/IdeologicalGroup";
import Party from "../Party";
import ElectionEvent from "./ElectionEvent";

export default class ElectionEventManager implements Tickeable {
    static standardElectionTime: number = 200; //200 ticks of elections
    static tickCount: number = 0;


    currentPredictions: Map<Party, number>;
    tickManager: TickManager;
    startElection: Date;
    currentEvent: ElectionEvent | undefined;
    finnishElectionFunc: () => void;

    private boundTick: () => void;

    constructor(currentPredictions: Map<Party, number>, finnishElectionFunc: () => void) {
        this.currentPredictions = currentPredictions;
        this.tickManager = Game.getInstance().getTickManager();
        this.startElection = new Date();
        this.finnishElectionFunc = finnishElectionFunc;

        this.boundTick = this.tick.bind(this);
        this.tickManager.addTickCallback(this.boundTick);
    }


    tick(): void {
        if(ElectionEventManager.tickCount > ElectionEventManager.standardElectionTime) {
            this.finnishElection();
            ElectionEventManager.tickCount = 0;
        }
        if(!this.currentEvent && this.currentPredictions.size > 1 && Math.random() > 0.75) {
            this.currentEvent = this.generateRandomEvent();
        }
        ElectionEventManager.tickCount++;
    }

    getCurrentEvent(): ElectionEvent | undefined {
        return this.currentEvent;
    }

    generateRandomEvent(): ElectionEvent {
        let perpetrator: Party = this.selectRandomParty();
        let victim: Party = this.selectNoDuplicateRandomParty(perpetrator);

        return new ElectionEvent(perpetrator.name + " attacks the " + victim.name + " economic polity", "Long desc", perpetrator, victim, this.currentPredictions, 0.4, (p: Party, pv: number, v: Party, vv: number): void => {
            let perpetratorParty = this.findPartiesByIdeology(p);
            let victimParty = this.findPartiesByIdeology(v);

            this.currentPredictions.set(perpetratorParty, pv);
            this.currentPredictions.set(victimParty, vv);
            this.currentEvent = undefined;
        });
    }

    findPartiesByIdeology(p: Party): Party {
        for (const party of this.currentPredictions.keys()) {
            if(party.ideological_group == p.ideological_group) {
                return party;
            }
        }
        return new Party("Pirate Party", IdeologicalGroup.Libertarianism, "#982482", true);
    }

    selectNoDuplicateRandomParty(first: Party): Party {
        let second: Party = this.selectRandomParty()
        if(first == second) {
            return this.selectNoDuplicateRandomParty(first);
        }
        return second;
    }

    selectRandomParty(): Party {
        const keysArray = Array.from(this.currentPredictions.keys());
        const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
        
        return randomKey;
    }

    finnishElection(): void {
        this.tickManager.removeTickCallback(this.boundTick);
        this.finnishElectionFunc();
    }

    
    getElectionsFormated(): any {
        let formatted = [];
        for (const party of this.currentPredictions.entries()) {
            formatted.push([party[0].name, party[1], party[0].color])
        }
        return formatted;
    }

}
