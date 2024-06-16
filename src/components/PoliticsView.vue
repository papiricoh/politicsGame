<script setup>
import ParliamentChart from './charts/ParliamentChart.vue'
</script>


<script>
import { defineComponent } from 'vue';
import Game from '../logic/Game';

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      game: Game.getInstance(),
      parliamentData: [],
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
      this.updateData();
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
    <div v-for="pop in game.getPlayerCountry().population">
      <div>{{pop.ideology}}</div>
      <div>{{pop.total_population}}</div>
    </div>
  </div>
</template>

<style scoped>
.politics_container {
  width: 100%;
}
</style>
