<template>
  <div class="Interface container">
    <div class="text-container">
      <h1 class="header">
        Troov Test Technique
      </h1>
      <p class="snippet">
        réaliser une application web contenant une interface simple qui permet
        l'authentification et la gestion simple d'un objet.
      </p>
      <div class="button-container ">
        <div class="button-list-container">
          <NuxtLink to="/users">
            <button class="button list btn">
              Liste des Utilisateurs
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="dead-list">
        <NuxtLink to="/Liste-les-objets">
          <button class="button dead-list-btn">
            Ancienne liste d'objets (Obsolète!)
          </button>
        </NuxtLink>
      </div>
    </div>
    <img
      src="~/assets/images/LOGO-TROOV-1.png"
      class="image"
      alt="Le logo de Troov"
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Interface {
  height: 65vh;
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.text-container {
  width: 50%;
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 5rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 27.5rem;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.button-container {
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}

.list {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(13, 9, 252);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}

.dead-list-btn{
  padding: 0.1rem 1rem;
  border-radius: 100rem;
  background-color: rgb(255, 5, 5);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}

.button:hover {
  width: 21.5rem;
}
@media (max-width: 500px) {
  .Interface {
    height: 40vh;
  }
}
</style>
