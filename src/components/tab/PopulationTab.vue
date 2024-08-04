<script setup>
import SolRatingComp from "../populationComponents/SolRatingComp.vue";
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PopulationTab',
  data() {
    return {
      

    };
  },
  computed: {
    
  },
  methods: {
    
  },
  async mounted() {
    
  },

  async beforeUnmount() { 
    
  }
});
</script>

<template>
  <div class="pop_data">
    <div class="pop_type_list">
      <div class="pop_type_row">
        <div></div>
        <div>Type</div>
        <div>Population</div>
        <div>Happiness</div>
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'user-tie']" /> 
        <div>Bureaucrats</div>
        <div>{{ (10200).toLocaleString() }}</div>
        <SolRatingComp :num="7.5" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'user-graduate']" />
        <div>Profesionals</div>
        <div>{{ (10200).toLocaleString() }}</div>
        <SolRatingComp :num="6.5" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'person-digging']" />
        <div>Workers</div>
        <div>{{ (10200).toLocaleString() }}</div>
        <SolRatingComp :num="4.5" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'person-military-rifle']" />
        <div>Military</div>
        <div>{{ (10070).toLocaleString() }}</div>
        <SolRatingComp :num="9.4" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'person-cane']" />
        <div>Elderlies</div>
        <div>{{ (10200).toLocaleString() }}</div>
        <SolRatingComp :num="6.8" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'children']" />
        <div>Children</div>
        <div>{{ (10200).toLocaleString() }}</div>
        <SolRatingComp :num="8.0" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'user-secret']" />
        <div>Criminals</div>
        <div>{{ (890).toLocaleString() }}</div>
        <SolRatingComp :num="0" />
      </div>
      <div class="pop_type_row">
        <font-awesome-icon :icon="['fas', 'person-rifle']" />
        <div>Insurgents</div>
        <div>{{ (0).toLocaleString() }}</div>
        <SolRatingComp :num="0" />
      </div>
    </div>
    <div class="pop_type_list">
      details
    </div>

  </div>
</template>

<style scoped>
.pop_type_row {
  display: grid;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  text-align: start;
  cursor: pointer;
  grid-template-columns: .5fr 3fr 3fr 3fr;
}
.pop_type_row > *:first-child {
  height: 1.4rem;
}
.pop_type_row:hover {
  text-decoration: underline;
}
.pop_type_row:first-child {
  border-bottom: 2px solid rgba(255, 255, 255, 0.75);
}
.pop_type_row:first-child:hover {
  text-decoration: none;
}
.pop_type_list {
  display: flex;
  flex-direction: column;
  gap: .8rem;
  width: calc(50% - .5rem);
  box-sizing: border-box;
}
.pop_data {
  display: flex;
  gap: 1rem;
}
</style>
