<script setup>
import GdpChart from "../charts/GdpChart.vue";
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EconomyTab',
  data() {
    return {
      

    };
  },
  computed: {
    
  },
  methods: {
    calculateInflationColor(num) {
      if(num <= 0) {
        return "background-color: rgb(0, 90, 0);";
      }else {
        return "background-color: rgb(90, 0, 0);";
      }
    }
  }
});
</script>

<template>
  <div class="economy_container">
    <div class="economy_grid">
      <div class="ec_data_con">
        <div>GDP</div>
        <div>${{ Number((10293024214293).toFixed()).toLocaleString() }}</div>
      </div>
      <div class="lateral_separator"></div>
      <div class="ec_data_con">
        <div>GDP Per Capita</div>
        <div>${{ Number((109302).toFixed()).toLocaleString() }}</div>
      </div>
      <div class="lateral_separator"></div>
      <div class="ec_data_con">
        <div>Yearly Inflation</div>
        <div class="inf_cont" :style="calculateInflationColor(-2)">-2.000%</div>
      </div>
    </div>
    <div class="eco_graph">
      <div class="eco_chart"> <!-- GDP chart -->
        <GdpChart :newData="[[1,2], [2, 3]]"/>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.economy_container {
  display: flex;
  flex-direction: column;
}
.economy_grid {
  display: grid;
  grid-template-columns: 1fr 2px 1fr 2px 1fr;
}
.ec_data_con {
  display: flex;
  flex-direction: column;
  gap: .2rem;
  text-align: start;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: bold;
}
.lateral_separator {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
}
.inf_cont {
  background-color: rgb(90, 0, 0);
  width: min-content;
  padding: 0 1rem;
  text-align: center;
  border-radius: .4rem;
  max-width: 10rem;
}
.eco_graph {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.eco_chart {
  width: 100%;
}
</style>
