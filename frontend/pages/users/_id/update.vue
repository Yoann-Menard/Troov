<template>
  <div>
    <h1>Modifier un Utilisateur</h1>
    <hr>

    <div class="row">
      <div class="col-md-6">
        <form action="" method="post" @submit.prevent="submitForm()">
          <div class="form-group">
            <label for="">username</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors && errors.username }"
            >
            <div v-if="errors && errors.username" class="invalid-feedback">
              {{ errors.username.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">email</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors && errors.email }"
            >
            <div v-if="errors && errors.email" class="invalid-feedback">
              {{ errors.email.msg }}
            </div>
          </div>

          <div class="form-group">
            <label for="">password</label>
            <textarea
              v-model="password"
              cols="30"
              rows="4"
              class="form-control"
              :class="{ 'is-invalid': errors && errors.password }"
            />
            <div v-if="errors && errors.password" class="invalid-feedback">
              {{ errors.password.msg }}
            </div>
          </div>

          <input type="submit" value="Submit" class="btn btn-primary mr-3">
          <NuxtLink
            :to="'/users/' + $route.params.id"
            class="btn btn-secondary mr-3"
          >
            Annuler
          </NuxtLink>
        </form>
      </div>
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
  data () {
    return {
      errors: null,
      username: null,
      email: null,
      password: null
    }
  },
  mounted () {
    this.fillFormData()
  },
  methods: {
    fillFormData () {
      this.username = this.user.username
      this.email = this.user.email
      this.password = this.user.password
    },
    submitForm () {
      this.$axios
        .patch('/users/' + this.$route.params.id, {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response)
          if (response.data._id) {
            this.$router.push({
              name: 'users-id',
              params: { updated: 'yes', id: this.$route.params.id }
            })
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.response.data.errors) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>
