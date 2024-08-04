<script setup>

</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndustryTab',
  data() {
    return {
      nav_page: "home",

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
      <div>Overview</div>
    </div>
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
  padding: 0 2rem;
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
