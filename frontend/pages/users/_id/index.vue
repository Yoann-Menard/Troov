<template>
  <div>
    <h1>Détails de l'utilisateur id : {{ user._id }}</h1>

    <hr>

    <div
      v-if="$route.params.updated=='yes'"
      class="alert alert-success"
    >
      Modification de l'utilisateur effectué
    </div>

    <h2 style="color: green">
      Username de l'utilisateur : {{ user.username }}
    </h2>

    <h3 style="color: blue">
      Email de l'utilisateur : {{ user.email }}
    </h3>

    <p style="color : red">
      Mot de passe de l'utilisateur (Hashé) : {{ user.password }}
    </p>

    <hr>
    <div class="d-flex justify-content-between">
      <div>
        <nuxt-link :to="'/users/' + user._id + '/update'" class="btn btn-primary mr-3">
          Modifier
        </nuxt-link>
        <button class="btn btn-danger" @click="deleteRecord()">
          Supprimer
        </button>
      </div>
      <nuxt-link to="/users" class="btn btn-secondary mr-3">
        Retourner à la liste des utilisateurs
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.$axios.get('/users/' + context.route.params.id)
    return {
      user: data
    }
  },
  methods: {
    deleteRecord () {
      if (confirm('Êtes-vous certain de vouloir supprimer cette utilisateur ?') === true) {
        this.$axios.delete('/users/' + this.$route.params.id)
          .then((response) => {
            if (response.data._id) {
              this.$router.push({ name: 'users', params: { deleted: 'yes' } })
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>
