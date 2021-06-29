<template>
  <div class="container">
    <h4 class="header">
        {{ cardsSection.title }}
    </h4>
    <p class="description">
        {{ cardsSection.description }}
    </p>

    <div class="cards-container">
      <Large-card
      v-for="card in cardsSection.cards"
      :key="card.id"
      :card="card"
      />
    </div>
  </div>
</template>

<script>
import LargeCard from './LargeCard.vue'
export default {
  props: ['cardsSection']
}
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.description {
  color: grey;
  margin-bottom: 1.5rem;
}
.cards-container {
  display: flex;
  justify-content: space-between;
}
</style>
