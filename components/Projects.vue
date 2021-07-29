<template>
  <section class="w-full bg-gray-800 text-white text-center">
    <div class="container mx-auto w-full p-4">
      <div class="w-full text-center">
        <h1>Projects</h1>
      </div>

      <div class="py-4 my-8">
        <div class="flex flex-wrap justify-center">

          <a class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-700 rounded" href="http://enjine.ecosis.io" target="_blank">
            <div class="flex flex-col justify-around items-center">
              <img src="~/assets/logos/enjine.png" class="w-32 rounded-full">
              <h2>enjine</h2>
            </div>
            <p>Progressive Fullstack Application Framework for interoperable Progressive Web, Native and Server Applications</p>
          </a>

          <a class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-700 rounded" href="http://ecosis.io" target="_blank">
            <div class="flex flex-col justify-around items-center">
              <img src="~/assets/logos/ecosis.png" class="w-32 rounded-full">
              <h2>ecosis</h2>
            </div>
            <p>Decentralized Autonomous Partnership Network</p>
          </a>

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
