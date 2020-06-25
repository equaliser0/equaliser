<template>
  <article>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const content = await $content('home').fetch()

    return {
      content
    }
  }
}
</script>
