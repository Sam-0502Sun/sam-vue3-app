<template>
  <img :src="Logo" class="Logo"/>
</template>

<script>
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'img',
  props: {
    Logo: {
      type: String
    }
  },
  setup () {
    onMounted(() => {
      VanillaTilt.init(document.querySelector('.Logo'), {
        max: 50,
        speed: 3000
      })
    })
    return {}
  }
}
</script>

<style lang="less" scoped>
img {
  display: block;
  height: 80px;
  width: 80px;
  background-size: cover;
}
</style>
