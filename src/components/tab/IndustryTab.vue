<script setup>
import InProductionTab from "./subtabs/InProductionTab.vue";
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndustryTab',
  data() {
    return {
      nav_page: "production",

    };
  },
  computed: {
    
  },
  methods: {
    
  }
});
</script>

<template>
  <div class="industry_container">
    <div class="industry_nav">
      <div v-if="nav_page == 'home'" class="selected_industry_nav">Overview</div>
      <div v-else @click="nav_page = 'home'">Overview</div>
      <div v-if="nav_page == 'best10'" class="selected_industry_nav">Best 10 Companies</div>
      <div v-else @click="nav_page = 'best10'">Best 10 Companies</div>
      <div v-if="nav_page == 'production'" class="selected_industry_nav">Production Methods</div>
      <div v-else @click="nav_page = 'production'">Production Methods</div>
    </div>
    <InProductionTab />
  </div>
</template>

<style scoped>
.industry_container {
  display: flex;
  flex-direction: column;

}

.industry_nav {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  padding: 0 1.4rem;
}
.industry_nav > * {
  cursor: pointer;
  padding: 0 4px;
  border-radius: .15rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  transition: .4s;
}
.industry_nav > *:hover {
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
}
.selected_industry_nav {
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
}
</style>
