<template>
  <div class="h-screen flex items-center">
    <div
      class="container max-w-md mx-auto xl:max-w-3xl flex bg-white rounded-lg shadow overflow-shown flex"
    >
      <div class="w-full xl:w-1/2 p-8">
        <form @submit.prevent="submitForm">
          <h1 class=" text-2xl font-bold">
            Crée un compte
          </h1>
          <div class="mb-4 mt-6">
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              v-model="username"
              class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
              type="text"
              placeholder="Votre Username"
            >
          </div>
          <div class="mb-4 mt-6">
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              v-model="email"
              class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
              type="text"
              placeholder="Votre adresse email"
            >
          </div>
          <div class="mb-6 mt-6">
            <label
              class="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              id="password"
              v-model="password"
              class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
              type="password"
              placeholder="Votre mot de passe"
            >
          </div>
          <div class="flex w-full mt-8">
            <button
              class="w-full bg-grey-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            >
              Crée un compte
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    submitForm () {
      this.$axios.post('/users/register', {
        username: this.username,
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
