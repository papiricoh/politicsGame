import { IdeologicalGroup } from "../models/politics/Enums/IdeologicalGroup";
import Party from "../models/politics/Party";
import PopulationUnit from "../models/population/PopulationUnit";
import MathUtils from "../utils/MathUtil";

export default class Government {
    type: string;

    parties: Map<Party, number>;
    //parliament
    pmMaxSeats: number = 200;
    ideologicalTendency: IdeologicalGroup = IdeologicalGroup.Conservatism;
    votersFactor: number = 0;
    lastElection: Date | undefined;
  
    constructor(type: string, parties: Map<Party, number>, votersFactor: number) {
        this.type = type;
        this.parties = parties;
        this.votersFactor = votersFactor;
    }

    setIdeologicalTendency(ig: IdeologicalGroup): void {
        this.ideologicalTendency = ig;
    }

    startElection(population: PopulationUnit[]): void {
        let newParliament: Map<Party, number> = new Map<Party, number>();
        let totalVotesParties: Map<Party, number> = new Map<Party, number>();
        let totalVotes: number = 0;

        //Initialice voters intencion
        for (const pop of population) {
            let compatible_parties: Party[] = [];

            let partyExist = false;
            for (const party of this.parties.keys()) {
                if(party.ideological_group.indexOf(pop.ideology) > -1) {
                    party.isNew = false;
                    compatible_parties.push(party)
                    partyExist = true;
                }
            }
            if(!partyExist) {
                compatible_parties.push(new Party(pop.ideology.toString() + " Party", pop.ideology, this.randomHexColor(), true))
            }


            let divisionFactor: number = compatible_parties.length;
            let activeVoters: number = pop.total_population * this.votersFactor;
            for (const compParty of compatible_parties) {
                let voters = Number(((activeVoters / divisionFactor) * (compParty.ideological_group == this.ideologicalTendency ? 2.8 : 1)).toFixed());
                if(compParty.isNew) {
                    voters = Number((voters / 2).toFixed());
                }

                totalVotesParties.set(compParty, voters + MathUtils.getRandomInt(voters * 0.1));
                totalVotes += voters;
            }
        }


        //TODO: CRONJOB await x days to end the election campaing
        let seatValue = totalVotes / this.pmMaxSeats;
        for (const party of totalVotesParties.entries()) {
            let partyVotes = Number((party[1] / seatValue).toFixed());
            if (partyVotes > 0) {
                newParliament.set(party[0], partyVotes);
            }
        }


        //Order parties by ideological aligment
        let defParliament: Map<Party, number> = new Map<Party, number>();
        let totalIdeologies: number = Object.keys(IdeologicalGroup).length;
        for (let index = 0; index < totalIdeologies; index++) {
            let ideology = Object.values(IdeologicalGroup)[index];
            for (const party of newParliament.entries()) {
                if(party[0].ideological_group == ideology) {
                    defParliament.set(party[0], party[1]);
                    break;
                }
            }

        }

        this.parties = defParliament;

    }

    private randomHexColor(): string {
        return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    getParliamentFormated(): any {
        let formatted = [];
        for (const party of this.parties.entries()) {
            formatted.push([party[0].name, party[1], party[0].color, party[0].getAbreviation()])
        }
        return formatted;
    }
    
    getBiggerParty(): Party {
        let provParty = new Party("Abstencionist Alliance", IdeologicalGroup.Conservatism, "#ffffff", true);
        let votes = 0;
        for (const party of this.parties.entries()) {
            if(party[1] > votes) {
                provParty = party[0];
                votes = party[1];
            }
        }
        return provParty;
    }
  
}