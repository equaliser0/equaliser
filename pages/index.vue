<template>
  <div class="text-white">
    <Cover/>
    <About/>
    <Projects/>
    <Posts/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>

h1 {
  @apply text-3xl p-2 m-2 font-bold
}

h2 {
  @apply text-2xl p-2 m-2 font-bold
}

h3 {
  @apply text-xl p-2 m-2 font-bold
}

</style>
