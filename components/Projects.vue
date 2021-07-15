<template>
  <section class="w-full bg-gray-700 text-white text-center">
    <div class="container mx-auto w-full p-4">
      <div class="w-full text-center">
        <h1>Projects</h1>
      </div>
      <div class="flex flex-wrap justify-around">
        <div class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-800 rounded">
          <div class="flex flex-col justify-around items-center">
            <img src="~/assets/logos/enjine.png" class="w-32 rounded-full">
            <h2>enjine</h2>
          </div>
          <p>Progressive Fullstack Application Framework for interoperable Progressive Web, Native and Server Applications</p>
        </div>
        <div class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-800 rounded">
          <div class="flex flex-col justify-around items-center">
            <img src="~/assets/logos/ecosis.png" class="w-32 rounded-full">
            <h2>ecosis</h2>
          </div>
          <p>Decentralized Autonomous Partnership Network</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
