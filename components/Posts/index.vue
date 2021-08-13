<template>
  <section class="bg-gray-700 w-full p-4">
    <div class="container mx-auto w-full">
      <div class="w-full text-center">
        <h1>Posts</h1>
      </div>
      <div class="flex flex-wrap justify-center items-center w-full">
        <div v-for="(post, i) in posts">
          <Post :content="post" class=""/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Post from './Post'
export default {
  data() {
    return {
      posts: [
        {
          title: 'AI driven Machine to Machine Economy',
          img: 'https://images.hive.blog/p/USgKoryE83j1sM6wMdPDm7CMsootU7inv8tSinwc97ho2wtEoVhw7JJBD6EAZm4MQTPVZFYhXa8jLAkJZzTX8z?format=match&mode=fit&width=640',
          link: 'https://leofinance.io/@equaliser/ai-driven-machine-to-machine-economy'
        },
        {
          title: 'Business Model Framework ',
          img: 'https://images.hive.blog/p/NTy4GV6ooFRmaCXZ8UYgPhoud1kjiNX8QokLEZtbBKLuLWQ9yt7K3o4Fpm2xse4hFXpQnZQ6XFaVJ8AxE2TrjWM2BYowug1pryFmu1PhKKZShKh5D5DGyuK5Xpg4GMKRynPiU8256rWTMiXYhjpoAmgb9HdxDEfWGP98p7bL?format=match&mode=fit&width=640',
          link: 'https://leofinance.io/@equaliser/business-model-framework'
        }
      ]
    }
  },
  components: {
    Post
  }
}
</script>

<style lang="css" scoped>
</style>
