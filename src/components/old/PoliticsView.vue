<script setup>
import IncrementalNumber from './visual/IncrementalNumber.vue'
import ParliamentChart from './charts/ParliamentChart.vue'
import ElectionsChart from './charts/ElectionsChart.vue'
</script>


<script>
import { defineComponent } from 'vue';
import Game from '../../logic/Game';
import ElectionEventManager from '../logic/models/politics/Elections/ElectionEventManager';

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      game: Game.getInstance(),
      parliamentData: [],
      isElectionTime: false,
      electionData: [],

      debugElectionTick: 0,
      currentElectionEvent: null,
    };
  },
  computed: {
    
  },
  methods: {
    updateData() {
      this.parliamentData = this.game.getPlayerCountry().government.getParliamentFormated();
    },
    startElections() {
      this.game.getPlayerCountry().startElections();
      //this.game.getTickManager().addTickCallback(this.electionTick);
      this.isElectionTime = true;
    },
    electionTick() {
      //Finnish Election
      if(this.game.getPlayerCountry().government.electionManager == undefined) {
        //this.game.getTickManager().removeTickCallback(this.electionTick);
        this.updateData();
        this.isElectionTime = false;
        this.electionData = [];
        console.log("Elections finnished");
        return;
      }
      console.log("tick");
      this.debugElectionTick = ElectionEventManager.tickCount;
      this.electionData = this.game.getPlayerCountry().government.electionManager.getElectionsFormated();
      this.currentElectionEvent = this.game.getPlayerCountry().government.electionManager.getCurrentEvent();
    },
    finnishElectionEvent(num) {
      if(num == 1) {
        this.currentElectionEvent.selectPerpetratorOption();
      }else if(num == 2) {
        this.currentElectionEvent.selectVictimOption();
      }
      this.currentElectionEvent = null;
    }
  },
  async mounted() {
    this.updateData();
    //this.game.getTickManager().addTickCallback(this.updateData);
  },

  async beforeUnmount() { 
    //this.game.getTickManager().removeTickCallback(this.updateData);
  }
});
</script>

<template>
  <div class="politics_container">
    <ParliamentChart :newData="parliamentData"/>
    <button @click="startElections">ELections</button>
    <IncrementalNumber :num="100000"/>
    <div v-for="pop in game.getPlayerCountry().population">
      <div>{{pop.ideology}}</div>
      <div>{{pop.total_population}}</div>
    </div>
    <ElectionsChart :newData="electionData"/>
    <div>{{ debugElectionTick }}</div>
    <div v-if="currentElectionEvent">
      <div>{{ currentElectionEvent.title }}</div>
      <div>{{ currentElectionEvent.desc }}</div>
      <div>{{ currentElectionEvent.perpetrator.name }}</div>
      <div>{{ currentElectionEvent.victim.name }}</div>
      <button @click="finnishElectionEvent(1)">Perpetrator</button>
      <button @click="finnishElectionEvent(2)">Victim</button>
    </div>
  </div>
</template>

<style scoped>
.politics_container {
  width: 100%;
}
</style>
