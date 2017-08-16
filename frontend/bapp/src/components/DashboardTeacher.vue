<template>
  <div>
    <div class="ui message" v-for="incident in incidents">
      <div class="content">
        <div class="header">Incident</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Summary</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary" >
                <a>{{incident.student_first_name}} {{incident.student_last_name}}</a> in grade {{incident.student_grade}} recieved a {{incident.incident_type}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Status</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                {{incident.status}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content" id="bot-dash-buttons">
        <button class="ui button"> <router-link to="/dashboardteacher/viewincident">View Details</router-link></button>
        <button class="ui button">Update</button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      incidents: [],
      incident: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8010/api/incidents')
      .then(response => {
        console.log(response.data)
        this.incidents = response.data
      })
  }

}
</script>
<style>

#bot-dash-buttons{
  max-width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

</style>
