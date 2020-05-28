<template>
  <section id="cover" class="bg-gray-900 w-screen h-screen">
    <img
      class="absolute bottom-0 left-0 m-32"
      src="@/assets/imgs/equaliser-Logo-final_300.png">
  </section>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
#cover {
  background: url('../../assets/imgs/equalsBackground.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
