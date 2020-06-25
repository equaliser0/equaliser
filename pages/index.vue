<template>
  <div id="app" class="bg-gray-900 h-full text-white">
    <div class="">
      <t-alert
        base-class="border px-4 py-3 rounded absolut"
        danger-class="bg-red-100 border-red-400 text-red-700"
        variant="danger"
        show>
        <p>This App is under developement!</p>
      </t-alert>
      <Header class="w-full"/>
      <!-- <About class=""/> -->
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
// import About from './components/About'

export default {
  name: 'App',
  components: {
    Header,
    // About
  }
}
</script>

<style>
</style>
