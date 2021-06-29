<template>
  <div class="container">
    <Liste-les-objets />
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
