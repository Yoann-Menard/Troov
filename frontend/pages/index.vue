<template>
  <div class="container">
    <Interface />
    <LargeCardDisplay
    v-for="cardInfo in largeCardInfo"
    :key="cardInfo.id"
    :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections } from '@/assets/objet.js'
export default {
  data () {
    return {
      largeCardInfo: largeCardSections
    }
  }
}
</script>
