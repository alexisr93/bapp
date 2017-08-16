<template>
  <div>
    <div class="ui message" v-for="student in students">
      <div class="content">
        <div class="header">Incident</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Summary</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary" >
                <a>{{student.name}}</a> </a> was <a> {{incidents}}</a>
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
                <a>Current Status</a> {{status}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content" id="bot-dash-buttons">
        <button class="ui button">View Details</button>
        <button class="ui button">Change Status</button>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      students: [],
      student: '',
      incidents: []
    }
  },
  created: function () {
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.students = response.data
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
