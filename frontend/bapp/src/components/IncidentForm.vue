<template>
  <div>
    <form class="ui form" id="main-form">
      <h4 class="ui dividing header">Incident Information</h4>
      <div class="field">
        <label> Student Name</label>
        <div class="three fields">
          <div class="field">
            <input type="text" name="student[first-name]" placeholder="First Name" v-model="newIncident.student_first_name">
          </div>
          <div class="field">
            <input type="text" name="student[middle-name]" placeholder="Middle Name" v-model="newIncident.student_middle_name">
          </div>
          <div class="field">
            <input type="text" name="student[last-name]" placeholder="Last Name"v-model="newIncident.student_last_name">
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>Grade</label>
          <select class="ui fluid dropdown" v-model="newIncident.student_grade">
            <option value=""></option>
            <option value="6">6</option>
            <option value=7>7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div class="field">
          <label>Incident Type</label>
          <select class="ui fluid dropdown" v-model="newIncident.incident_type">
            <option value=""></option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>

          </select>
        </div>
      </div>
      <div class="four fields">
        <div class="field">
          <label>Date of Incident</label>
          <select class="ui fluid dropdown" v-model="newIncident.incident_details.date_of_incident">
            <option value="">Month</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </div>
        <div class="field" id="in-margin">
          <input type="text" name="Day" placeholder="Day">
        </div>
        <div class="field" id="in-margin">
          <input type="text" name="Year" placeholder="Year">
        </div>
        <div class="field">
          <label>Class Period</label>
          <select class="ui fluid dropdown">
            <option value=""></option>
            <option value="Jan">1</option>
            <option value="Feb">2</option>
            <option value="Mar">3</option>
            <option value="Apr">4</option>
            <option value="May">5</option>
            <option value="Jun">6</option>
            <option value="Jul">7</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Specific Behaviors</label>
        <select name="skills" class="ui fluid dropdown" multiple="">
          <option value=""></option>
          <option value="lack_of_work">Lack of Work</option>
          <option value="unprepared">Unprepared</option>
          <option value="misconduct">Misconduct</option>
          <option value="throwing_objects">Throwing Objects</option>
          <option value="cheating">Cheating</option>
          <option value="defiant_disobedient">Defiant/Disobedient</option>
          <option value="gum_chewing">Gum Chewing</option>
          <option value="disrespectful">Disrespectful</option>
          <option value="tardy">Tardy</option>
          <option value="profanity">Profanity</option>
          <option value="physical_agression">Physical Aggression</option>
          <option value="harassment">Harassment</option>
          <option value="bullying">Bullying</option>
          <option value="dress_code_violation">Dress Code Violation</option>
          <option value="inapp_display_of_affection">Inappropriant Display of Affection</option>
          <option value="electronics_violation">Electronics Violation</option>
          <option value="plagiarism">Plagiarism</option>
          <option value="technology_violation">Technology Violation</option>
          <option value="propery_misuse">Property Misuse</option>
        </select>
      </div>
      <div class="field">
        <label>Previous Interventions</label>
        <select name="skills" class="ui fluid dropdown" multiple="">
          <option value=""></option>
          <option value="student_warning">Student Warning</option>
          <option value="parent_note_by_teacher">Parent Note By Teacher</option>
          <option value="indivdual_academic_plan">Indvidual Academic Plan</option>
          <option value="parent_contact_by_teacher">Parent Contact By Teacher</option>
          <option value="parent_conference_with_teacher">Parent Conference With Teacher</option>
          <option value="previous_referral_to_office">Previous Referral To Office</option>
        </select>
      </div>
      <div class="ui form">
        <div class="field">
          <label>Specific Incident Information</label>
          <textarea></textarea>
        </div>
      </div>
      <div class="field" id="bot-buttons">
        <h4 class="ui dividing header"></h4>
        <div class="ui button" tabindex="" v-on:click="submitIncident">Submit</div>
        <div class="ui button" tabindex="">Reset Form</div>
      </div>


    </form>

  </div>

</template>

<script type = "text/javascript" >
export default {
  data () {
    return {
      newIncident: {
        student_first_name: '',
        student_middle_name: '',
        student_last_name: '',
        student_grade: '',
        incident_details: {
          referral_incident: {
            r_incident_id: '',
            referring_staff: '',
            class_period: '',
            date_of_incident: '',
            problem_behavior: '',
            specific_information: '',
            previous_teacher_intervention: '',
            action_taken_by_administration: '',
            parent_requests: ''
          },
          other_incident: {
            o_incident_id: '',
            reporting_staff: '',
            date_of_incident: '',
            class_period: '',
            teacher_comments: [''],
            admin_comments: ['']
          }
        }

      }
    }
  },
  methods: {
    submitIncident: function () {
      var data = this.newIncident
      this.$http.post('http://localhost:8010/api/incidents', data)
      .then(response => {
        console.log(data, 'POST was successful')
      })
    }
  }
}

</script>
<style>
#main-form{

}
#in-margin{
  margin-top: 17pt;
}
#bot-buttons{
  max-width: 225px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}
</style>
