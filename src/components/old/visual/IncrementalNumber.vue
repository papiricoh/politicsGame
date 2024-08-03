<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IncrementalNumber',
    data() {
        return {
            starting_num: 0,
            intervalId: null,
        };
    },
    props: {
        num: {
            type: Number,
            required: true,
        },
    },
    watch: {
        num: {
            handler(newVal) {
                this.incrementNumber(newVal);
            },
            immediate: true
        }
    },
    methods: {
        incrementNumber(target) {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.starting_num = 0;
            this.intervalId = setInterval(() => {
                if (this.starting_num < target) {
                    this.starting_num += 123;
                } else {
                    this.starting_num = target;
                    clearInterval(this.intervalId);
                }
            }, 1); // Cambia 50 por el valor en ms que desees para la velocidad de incremento.
        }
    },
});
</script>

<template>
  <div>{{ starting_num.toLocaleString() }}</div>
</template>