<template>
  <section id="cover" class="">
    <div class="container mx-auto p-6 h-screen">
      <img
        class="absolute bottom-0 left-0 m-32"
        src="@/assets/imgs/Logo.png">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
#cover {
  background: url('../../assets/imgs/Cover.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
