<template>
  <div>
    <div class="ui search" id="search-bar">
      <div class="ui icon input">
        <input class="prompt" type="text" placeholder="Search by Last Name...">
        <i class="search icon"></i>
      </div>
      <div class="results"></div>
    </div>
    <div class="ui message" v-for="incident in incidents" id="incident-container">
      <div id="content-container">
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
      </div>
      <div class="extra content" id="bot-dash-buttons">
        <button  class="ui button"> <router-link to="/dashboardteacher/viewincident">View Details</router-link></button>
        <button class="ui button" id="bottom-button"> <router-link to="/dashboardkteacher/updateincident"> Update</router-link></button>
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
#search-bar{
  max-width: 600px;
}
#incident-container{
  max-height: 100px;
  overflow: hidden;
}
#content-container{
  max-width: 300px;
  margin: 0px;
  float: left;
}
#bot-dash-buttons{
  max-width: 125px;
  float: right;
  display: block;
  margin-left: auto;
  margin-right: 0px;
}
#bottom-button{
  margin-top: 5px;
  width: 121px
}
</style>
