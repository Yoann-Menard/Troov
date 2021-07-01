<template>
  <div class="container">
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cards-section="cardInfo"
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
