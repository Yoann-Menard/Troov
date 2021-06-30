<template>
  <p v-if="$fetchState.pending">Fetching users...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Users</h1>
    <ul>
      <li v-for="user of users" :key="user.id">{{ user.username }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  async fetch () {
    this.users = await fetch(
      'http://localhost:6300/users'
    ).then(res => res.json())
  }
}
</script>
