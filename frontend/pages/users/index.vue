<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Liste des Utilisateurs</h1>
      <div class="button-add-container">
        <NuxtLink to="/users/add">
          <button class="button add btn">
            Ajouter
          </button>
        </NuxtLink>
      </div>
    </div>
    <hr>

    <div v-if="$route.params.created == 'yes'" class="alert alert-success">
      Nouvel utilisateur Crée
    </div>
    <div v-if="$route.params.deleted == 'yes'" class="alert alert-success">
      Utilisateur supprimé
    </div>

    <div v-if="users.length" class="list-group">
      <NuxtLink
        v-for="users in users"
        :key="users._id"
        class="list-group-item list-group-item-action"
        :to="'/users/' + users._id"
      >
        Username : <h1 style="color: green">
          {{ users.username }}
        </h1>
        <button class="button edit-remove btn">
          Modifier
        </button>
      </NuxtLink>
    </div>

    <div v-else class="alert alert-info">
      Aucun utilisateur trouvé
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/users')
    return {
      users: data
    }
  }
}
</script>

<style scoped>
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
.add {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(9, 252, 78);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}

.edit-remove {
  padding: 1rem 2rem;
  border-radius: 100rem;
  background-color: rgb(255, 37, 8);
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
