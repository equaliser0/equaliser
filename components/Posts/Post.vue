<template>
  <a class="flex flex-wrap rounded m-2 p-2" :href="content.link" target="_blank">
    <h3 class="absolute">{{ content.title }}</h3>
    <img class="md:h-64 w-full rounded hover:opacity-50" :src="content.img" :alt="content.title">
  </a>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="css" scoped>
</style>
