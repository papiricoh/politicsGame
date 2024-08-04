<script setup>

</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SolRatingComp',
  data() {
    return {
      

    };
  },
  computed: {
    
  },
  methods: {
    getFormatedNum(num) {
      var newNum = num;
      return (newNum * 10).toFixed() / 10
    },
    getColor() {
      if(this.num > 7) {
        return "background-color: rgb(0, 80, 0);"
      }else if(this.num > 5) {
        return "background-color: rgb(110, 110, 0)"
      }else if(this.num > 2) {
        return "background-color: rgb(145, 75, 0)"
      }else {
        return "background-color: rgb(80, 0, 0);"
      }
    }
  },
  props: {
    num: Number
  },
  async mounted() {
    
  },

  async beforeUnmount() { 
    
  }
});
</script>

<template>
  <div class="rating_cont" :style="getColor()">
    <div>{{ getFormatedNum(num) }}</div>
  </div>
</template>

<style scoped>
.rating_cont {
  display: flex;
  align-items: center;
  background-color: rgb(145, 75, 0);
  max-width: 3rem;
  border-radius: .4rem;
  padding: 0 1rem;
  text-align: center;
  justify-content: center;
}
</style>
