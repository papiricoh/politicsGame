<script setup lang="ts">

</script>
<script lang="ts">
import { defineComponent } from 'vue';
import Game from '../logic/Game';

export default defineComponent({
  name: 'GoodComponent',
  data() {
    return {
      game: Game.getInstance(),
    };
  },
  computed: {
    
  },
  mounted() {
    
  },
});
</script>

<template>
  <div>
    

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
