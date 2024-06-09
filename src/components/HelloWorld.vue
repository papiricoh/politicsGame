<script setup lang="ts">
import GoodPriceChart from './charts/GoodPriceChart.vue'
</script>


<script lang="ts">
import { defineComponent } from 'vue';
import Game from '../logic/Game';
import {GoodTypes} from '../logic/models/economy/Enums/GoodTypes'

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      game: Game.getInstance(),
      economy: Game.getInstance().getPlayerCountry().economy,
      
    };
  },
  computed: {
    
  },
  methods: {
    updateData() {
      this.$forceUpdate();
    }
  },
  async mounted() {
    this.game.getTickManager().addTickCallback(this.updateData);
  },

  async beforeUnmount() { 
    this.game.getTickManager().removeTickCallback(this.updateData);
  }
});
</script>

<template>
  <div>
    <div>Population: {{ game.getPlayerCountry().population }}</div>
    <div>Active: {{ game.getPlayerCountry().getActivePopulation() }}</div>
    <div>Unemployed: {{ game.getPlayerCountry().economy.unemployed }}</div>
    <div>Vacants: {{ game.getPlayerCountry().economy.vacants }}</div>
    <div>Unemployment Rate: {{ ((game.getPlayerCountry().economy.unemployed / game.getPlayerCountry().getActivePopulation()) * 100).toFixed(2) }}%</div>
    <button @click="game.getPlayerCountry().economy.factories[0].size += 100">More size</button>

    <div>{{ game.getPlayerCountry().economy.goods.get(GoodTypes.Iron).getPrice() }}</div>
    <GoodPriceChart :newData="game.getPlayerCountry().economy.goods.get(GoodTypes.Iron).getPrice()"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
