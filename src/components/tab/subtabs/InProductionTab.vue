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
      <div></div>
      <div></div>
      <div class="me_cont">
        <div class="methods_box">
          <div class="method_sel"></div>
          <div class="method_sel"></div>
          <div class="method_sel"></div>
          <div class="method_sel"></div>
        </div>
      </div>
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
  display: grid;
  background-color: rgba(128, 128, 128, 0.3);
  min-height: 4rem;
  border-radius: .6rem;
  padding: 1rem;
  grid-template-columns: 1fr 3fr 3fr 3fr;
}
.me_cont {
  display: flex;
  align-items: center;
  justify-content: center;
}
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
</style>
