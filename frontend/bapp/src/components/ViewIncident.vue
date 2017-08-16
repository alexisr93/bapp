<template>
  <div>
    <div>
    <h4>Student Name:  Grade:  Incident Date:  Incident Type:</h4>

    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      incident: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8010/api/incidents/')
    .then(response => {
      console.log(response.data)
      this.incidents = response.data
    })
  }
}
</script>
<style>

</style>
