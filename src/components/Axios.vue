<template lang='pug'>
.home
  h1 These are examples of Axios requests on Vue

  .item-row
  h2
    strong GET
      |  Requests
  h3 Json Object:
  p  {{ info }}

  .sub-item-row
  h3 Iterating and Displaying the Formatted Json Object:

  //- This is how you iterate over an object
  table.json-table
    thead
      td
        strong ID:
      td
        strong Firstname:
      td
        strong Lastname:
    tr(v-for='item in info' :key='info.id')
      td
        span {{ item.id }}
      td
        span  {{ item.first_name }}
      td
        span  {{ item.last_name }}

  .item-row
    h2
      strong POST
        |  Requests

  .item-row
    .container
      h1 Click to Send POST
      form(v-on:submit.prevent='addTicket')
        .row
          br
          .form-group
            button.vdl-button.vdl-button--primary Create user

  //- if user
  //-   span Response
  //-   p {{ user }}
  //- else
  //-   p No user added yet
  h1 Response:
  p {{ user }}

</template>

<script>

// @ is an alias to /src

export default {
  data () {
    return {
      info: null,
      user: {}
    }
  },
  mounted () {
    this.axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        this.info = response.data.data
      })
  },
  methods: {
    addTicket () {
      let uri = 'https://reqres.in/api/users'
      this.axios.post(
        uri,
        {
          'name': 'morpheus',
          'job': 'leader'
        }
      ).then((response) => {
        this.user = response
        this.$store.commit('setUser', response.data)
      })
    }
  }
}
</script>

<style lang="scss">
  .home{
    text-align: center;
  }
  .item-row{
    margin-top: 2%;
  }
  .sub-item-row{
    margin-top: 5%;
  }
  .json-table{
    margin: 0 auto;

    td {
      border: 1px black solid;
      width: 80px;
    }
  }
</style>
