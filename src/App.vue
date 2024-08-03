<script setup>

</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data() {
    return {
      tab: "home",

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
    <div v-if="tab == 'parliament'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'building-columns']" />PARLIAMENT</div>
    <div v-else @click="tab = 'parliament'" class="tab_button"><font-awesome-icon :icon="['fas', 'building-columns']" />PARLIAMENT</div>
    <div v-if="tab == 'polls'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'chart-pie']" />POLLS</div>
    <div v-else @click="tab = 'polls'" class="tab_button"><font-awesome-icon :icon="['fas', 'chart-pie']" />POLLS</div>
    <div v-if="tab == 'economy'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'money-bills']" />ECONOMY</div>
    <div v-else @click="tab = 'economy'" class="tab_button"><font-awesome-icon :icon="['fas', 'money-bills']" />ECONOMY</div>
    <div v-if="tab == 'population'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'users-viewfinder']" />POPULATION</div>
    <div v-else @click="tab = 'population'" class="tab_button"><font-awesome-icon :icon="['fas', 'users-viewfinder']" />POPULATION</div>
    <div v-if="tab == 'military'" class="tab_button tab_active"><font-awesome-icon :icon="['fas', 'person-military-rifle']" />MILITARY</div>
    <div v-else @click="tab = 'military'" class="tab_button"><font-awesome-icon :icon="['fas', 'person-military-rifle']" />MILITARY</div>
  </nav>
  <main>
    <div class="top_menu">
      <div class="next_button">Next Day</div>
    </div>

    <div class="content_container">

    </div>
  </main>
</template>

<style>
nav {
  width: 14vw;
  height: 100vh;
}
main {
  width: 86vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  padding: .5rem;
  box-sizing: border-box;
}
.top_menu {
  display: flex;
  width: 86vw;
  height: calc(4rem - 1px);
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.30);
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
}
.next_button:hover {
  transition: .4s;
  
  background-position:-10rem;  
}
</style>
