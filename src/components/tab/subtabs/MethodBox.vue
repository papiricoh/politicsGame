<script setup>

</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MethodBox',
  data() {
    return {
      selected_method: "rural",
      
    };
  },
  computed: {
    
  },
  methods: {
    
  }
});
</script>

<template>
  <div class="methods_box">
    <div v-if="selected_method == 'rural'" class="method_sel tooltip method_selected"><font-awesome-icon :icon="['fas', 'tractor']" /><span class="tooltiptext">Rural focus</span></div>
    <div v-else @click="selected_method = 'rural'" class="method_sel tooltip"><font-awesome-icon :icon="['fas', 'tractor']" /><span class="tooltiptext">Rural focus</span></div>
    <div v-if="selected_method == 'suburban'" class="method_sel tooltip method_selected"><font-awesome-icon :icon="['fas', 'house-chimney']" /><span class="tooltiptext">Suburban focus</span></div>
    <div v-else @click="selected_method = 'suburban'" class="method_sel tooltip"><font-awesome-icon :icon="['fas', 'house-chimney']" /><span class="tooltiptext">Suburban focus</span></div>
    <div v-if="selected_method == 'general'" class="method_sel tooltip method_selected"><font-awesome-icon :icon="['fas', 'globe']" /><span class="tooltiptext">General focus</span></div>
    <div v-else @click="selected_method = 'general'" class="method_sel tooltip"><font-awesome-icon :icon="['fas', 'globe']" /><span class="tooltiptext">General focus</span></div>
    <div v-if="selected_method == 'urban'" class="method_sel tooltip method_selected"><font-awesome-icon :icon="['fas', 'mountain-city']" /><span class="tooltiptext">Urban focus</span></div>
    <div v-else @click="selected_method = 'urban'" class="method_sel tooltip"><font-awesome-icon :icon="['fas', 'mountain-city']" /><span class="tooltiptext">Urban focus</span></div>
    <div v-if="selected_method == 'international'" class="method_sel tooltip method_selected"><font-awesome-icon :icon="['fas', 'earth-europe']" /><span class="tooltiptext">International focus</span></div>
    <div v-else @click="selected_method = 'international'" class="method_sel tooltip"><font-awesome-icon :icon="['fas', 'earth-europe']" /><span class="tooltiptext">International focus</span></div>
  </div>
</template>

<style scoped>
.methods_box {
  display: flex;
}
.methods_box>* {
  border: 2px solid rgba(255, 255, 255, 0.5);
  min-height: 1.4rem;
  min-width: 1.4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  transition: .4s;
  cursor: pointer;
  padding: .3rem;
}
.methods_box>*:first-child {
  border-top-left-radius: .4rem;
  border-bottom-left-radius: .4rem;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
}
.methods_box>*:last-child {
  border-top-right-radius: .4rem;
  border-bottom-right-radius: .4rem;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
}
.methods_box>*:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.method_selected {
  background-color: rgba(0, 60, 0, 0.5);
}
</style>
