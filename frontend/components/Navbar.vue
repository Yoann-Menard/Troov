<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary padding">
    <NuxtLink
    class="navbar-brand"
    to="/">Interface</NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NuxtLink
          to="/Connexion"
          class="nav-link"
            >Connexion <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink
          to="/Inscription"
          class="nav-link"
            >S'inscrire <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.padding {
  padding: 1.5rem;
  background-color: rgb(0, 0, 0);
}
.nav-left {
  margin-left: auto;
}
</style>
