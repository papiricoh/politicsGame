<script setup lang="ts">

</script>
<script lang="ts">
import { defineComponent } from 'vue';
import Good from '../logic/models/economy/Good';

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      good: new Good('Apple', 1.0, 1000, 1000),
    };
  },
  computed: {
    currentPrice(): number {
      return this.good.getPrice();
    },
  },
});
</script>

<template>
  <div>
    <div>{{ good.name }}</div>
    <button @click="good.demand += 1000">Demmand +</button>
    <button @click="good.supply += 1000">Suppy +</button>
    <div>{{ good.getPrice() }}</div>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
