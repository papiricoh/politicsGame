<script setup lang="ts">

</script>
<script lang="ts">
import { defineComponent } from 'vue';
import Factory from '../logic/models/economy/Factory';
import NeededGood from '../logic/controllers/NeededGood';
import Game from '../logic/Game';
import Good from '../logic/models/economy/Good';
import { GoodTypes } from '../logic/models/economy/Enums/GoodTypes';

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      test: new Factory("test", [new NeededGood(1, Game.defaultGoods.get(GoodTypes.Wheat) ?? new Good("NONE", 1, 1, 1))], [1], new Map<Good, number>([[Game.defaultGoods.get(GoodTypes.Iron) ?? new Good("NONE", 1, 1, 1), 2]]), 2, 1500),
    };
  },
  computed: {
    
  },
});
</script>

<template>
  <div>
    <div>{{ test.name }}</div>
    <div>{{ test.getOutput() }}</div>
    <div>{{ test.getOutput().goods.keys }}</div>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
