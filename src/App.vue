<script setup>
import { ref } from 'vue'
import NewsWidget from './components/NewsWidget.vue'
import Loader from './components/Loader.vue'
import L2 from './components/L2.vue'
const isEligible = ref(true)
const loading = ref(false)


function testEligibility() {
    console.log('isEligible', isEligible.value)
    isEligible.value = !isEligible.value
}
</script>

<template>
  <div v-if=isEligible class="h-screen w-screen bg-green-500">
    <NewsWidget />
    <input type="checkbox" name="isEligible" id="legit-test" @change="testEligibility()">
  </div>

  <div v-else class="h-screen w-screen bg-red-500">
    <L2 />
    <input type="checkbox" name="isEligible" id="legit-test" @change="testEligibility()" checked class="absolute">
  </div>
</template>

<style scoped>

</style>
