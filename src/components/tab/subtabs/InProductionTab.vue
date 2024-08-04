<script setup>

</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'InProductionTab',
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
    <div class="in_prod_container_box">

    </div>
    
  </div>
</template>

<style scoped>
.industry_container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 2rem;
}
.in_prod_container_box {
  display: flex;
  background-color: rgba(128, 128, 128, 0.35);
  min-height: 4rem;
  border-radius: .6rem;
  padding: 1rem;
}
</style>
