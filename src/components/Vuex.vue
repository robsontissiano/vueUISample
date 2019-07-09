<template lang='pug'>
.home
  h1 These are examples of displaying the response stored in Vuex

  router-link(to='/axios')
    h3 Insert a new user here

  //- if users
  .sub-item-row
  h3 Displaying the Json Object Formatted from Vuex Store:
  |
  h3 Last User Inserted with Axios:

  //- This is how you iterate over an object

  table.json-table
    thead
      td
        strong ID:
      td
        strong Firstname:
      td
        strong Job:
      td
        strong Created At:
    tr(v-for='user in users' :key='user.id')
      td
        span {{ user.id }}
      td
        span {{ user.name }}
      td
        span {{ user.job }}
      td
        span {{ user.createdAt }}

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Vuex',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.users = this.$store.state.users
  }

}
</script>

<style lang="scss">
  .home{
    text-align: center;
  }
  .sub-item-row{
    margin-top: 5%;
  }
  .json-table{
    margin: 0 auto;

    td {
      border: 1px black solid;
      width: 150px;
    }
  }
</style>
