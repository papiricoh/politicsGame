<script setup>
import MethodBox from "./MethodBox.vue";
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
      <img src="/industry/metallurgy.png"/>
      <div class="in_title">
        <div>Metallurgic Factories</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
      <div class="me_data_cont">
        <div class="me_data">
          <div>Efficiency</div>
          <div>20%</div>
        </div>
        <div class="separator"></div>
        <div class="me_data">
          <div>PIB Value</div>
          <div>$293.239.219</div>
        </div>
        <div class="separator"></div>
        <div class="me_data">
          <div>Workers</div>
          <div>80%</div>
        </div>
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/farm.png"/>
      <div class="in_title">
        <div>Farm Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/assemblers.png"/>
      <div class="in_title">
        <div>Assembler Factories</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/mine.png"/>
      <div class="in_title">
        <div>Mining Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/energy.png"/>
      <div class="in_title">
        <div>Energy Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/supermarket.png"/>
      <div class="in_title">
        <div>Market Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/tech.png"/>
      <div class="in_title">
        <div>Tech Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/hospital.png"/>
      <div class="in_title">
        <div>Health Industries</div>
      </div>
      <div class="me_cont">
        <MethodBox />
      </div>
    </div>

    <div class="in_prod_container_box">
      <img src="/industry/banks.png"/>
      <div class="in_title">
        <div>Banks</div>
      </div>
      <div class="me_cont">
        <MethodBox />
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
  gap: 1rem;
}
.in_prod_container_box {
  display: grid;
  background-color: rgba(128, 128, 128, 0.3);
  min-height: 4rem;
  border-radius: .6rem;
  padding: 1rem;
  grid-template-columns: 1fr 3fr 3fr 5fr;
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
img {
  height: 6rem;
  border-radius: 1rem;
  box-shadow: 0 0 8px black;
}
.in_title {
  text-align: start;
  padding: 0 .6rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
}
.me_data_cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
}
.separator {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: .3rem;
  min-height: 4rem;
}
.me_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.4rem;
}
.me_data>div:first-child {
  font-size: 1.2rem;
}
</style>
