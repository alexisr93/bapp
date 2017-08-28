<template>
  <div>
    <div>
    <h4>Student Name: {{incident.student_first_name}} {{incident.student_middle_name}} {{incident.student_last_name}}  Grade: {{incident.student_grade}} Incident Date:  Incident Type:</h4>

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
