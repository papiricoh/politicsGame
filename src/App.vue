<script setup>
import PopulationTab from "./components/tab/PopulationTab.vue";
import EconomyTab from "./components/tab/EconomyTab.vue";
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data() {
    return {
      tab: "economy",


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
  <nav>
    <div v-if="tab == 'home'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'house']" />HOME</div>
    <div v-else @click="tab = 'home'" class="tab_button"><font-awesome-icon :icon="['fas', 'house']" />HOME</div>
    <div v-if="tab == 'executive'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'book-bookmark']" />EXECUTIVE</div>
    <div v-else @click="tab = 'executive'" class="tab_button"><font-awesome-icon :icon="['fas', 'book-bookmark']" />EXECUTIVE</div>
    <div v-if="tab == 'parliament'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'building-columns']" />PARLIAMENT</div>
    <div v-else @click="tab = 'parliament'" class="tab_button"><font-awesome-icon :icon="['fas', 'building-columns']" />PARLIAMENT</div>
    <div v-if="tab == 'court'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'scale-balanced']" />COURT</div>
    <div v-else @click="tab = 'court'" class="tab_button"><font-awesome-icon :icon="['fas', 'scale-balanced']" />COURT</div>
    <div v-if="tab == 'polls'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'chart-pie']" />POLLS</div>
    <div v-else @click="tab = 'polls'" class="tab_button"><font-awesome-icon :icon="['fas', 'chart-pie']" />POLLS</div>
    <div v-if="tab == 'economy'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'money-bills']" />ECONOMY</div>
    <div v-else @click="tab = 'economy'" class="tab_button"><font-awesome-icon :icon="['fas', 'money-bills']" />ECONOMY</div>
    <div v-if="tab == 'population'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'users-viewfinder']" />POPULATION</div>
    <div v-else @click="tab = 'population'" class="tab_button"><font-awesome-icon :icon="['fas', 'users-viewfinder']" />POPULATION</div>
    <div v-if="tab == 'territory'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'map-location-dot']" />TERRITORY</div>
    <div v-else @click="tab = 'territory'" class="tab_button"><font-awesome-icon :icon="['fas', 'map-location-dot']" />TERRITORY</div>
    <div v-if="tab == 'industry'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'industry']" />INDUSTRY</div>
    <div v-else @click="tab = 'industry'" class="tab_button"><font-awesome-icon :icon="['fas', 'industry']" />INDUSTRY</div>
    <div v-if="tab == 'diplomacy'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'globe']" />DIPLOMACY</div>
    <div v-else @click="tab = 'diplomacy'" class="tab_button"><font-awesome-icon :icon="['fas', 'globe']" />DIPLOMACY</div>
    <div v-if="tab == 'military'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'person-military-rifle']" />MILITARY</div>
    <div v-else @click="tab = 'military'" class="tab_button"><font-awesome-icon :icon="['fas', 'person-military-rifle']" />MILITARY</div>
    <div v-if="tab == 'currency'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'dollar-sign']" />CURRENCY</div>
    <div v-else @click="tab = 'currency'" class="tab_button"><font-awesome-icon :icon="['fas', 'dollar-sign']" />CURRENCY</div>
  </nav>
  <main>
    <div class="top_menu">
      <div class="next_button">Next Day <font-awesome-icon :icon="['fas', 'forward']" /></div>
    </div>

    <div class="content_container">
      <EconomyTab v-if="tab == 'economy'" />
      <PopulationTab v-if="tab == 'population'" />
    </div>
  </main>
</template>

<style scoped>
nav {
  width: 14vw;
  height: 100vh;
}
main {
  width: 86vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.tab_button {
  height: 4rem;
  display: flex;
  align-items: center;
  transition: .4s;
  cursor: pointer;
  font-weight: bold;
  gap: .6rem;
  padding: 0 1.4rem;
}

.tab_button > svg {
  font-size: x-large;
}
.tab_button:hover {
  background-color: rgba(255, 255, 255, 0.18);
}
.tab_button:active {
  background-color: rgba(255, 255, 255, 0.10);
}
.tab_active {
  background-color: rgba(255, 255, 255, 0.1);
}
.content_container {
  width: 86vw;
  padding: .8rem;
  min-height: 10rem;
  box-sizing: border-box;
}
.top_menu {
  display: flex;
  width: 86vw;
  height: calc(4rem);
  align-items: center;
  justify-content: flex-end;
  box-shadow: 4px 2px 4px rgba(255, 255, 255, 0.30);
  
}
.next_button {
  display: flex;
  margin-right: 1rem;
  height: 3rem;
  padding: 0 2rem;
  background: linear-gradient(120deg, rgba(10, 5, 95, 0.973) 0%, rgba(9,9,121,1) 71%);
  background-size: 10rem 3rem;  
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: .6rem;
  cursor: pointer;
  transition: .4s;
  gap: .8rem;
}
.next_button:hover {
  transition: .4s;
  
  background-position:-10rem;  
}
</style>
