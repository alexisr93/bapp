<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="First Name">
        <el-col :span="11">
          <el-input v-model="newIncident.student_first_name"/>
        </el-col>
      </el-form-item>

      <el-form-item label="Middle Name">
        <el-col :span="11">
          <el-input v-model="newIncident.student_middle_name"/>
        </el-col>

      </el-form-item>

      <el-form-item label="Last Name">
        <el-col :span="11">
          <el-input v-model="newIncident.student_last_name"/>
        </el-col>

      </el-form-item>

      <el-form-item label="Grade">
        <el-select v-model="newIncident.student_grade" placeholder="Select a grade">
          <el-option label="6th" value="6"/>
          <el-option label="7th" value="7"/>
          <el-option label="8th" value="8"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Incident Type">
        <el-select v-model="newIncident.incident_type" placeholder="Select incident type">
          <el-option label="Referral" value="referral"/>
          <el-option label="Other" value="other"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Date of Incident">
        <el-col :span="11">
          <el-date-picker v-model="newIncident.date_of_incident" type="date" placeholder="Pick a date" style="width: 100%;"/>
        </el-col>
      </el-form-item>

      <el-form-item label="Class Period">
        <el-select v-model="newIncident.class_period" placeholder="Select a period">
          <el-option label="1st" value="1"/>
          <el-option label="2nd" value="2"/>
          <el-option label="3rd" value="3"/>
          <el-option label="4th" value="4"/>
          <el-option label="5th" value="5"/>
          <el-option label="6th" value="6"/>
          <el-option label="7th" value="7"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Behavior">
        <el-select v-model="newIncident.specific_behaviors" multiple>
          <el-option value="lack_of_work" label="Lack of Work" name="type1"/>
          <el-option value="unprepared" label="Unprepared" name="type"/>
          <el-option value="misconduct" label="Misconduct" name="type"/>
          <el-option value="throwing_objects" label="Throwing Objects" name="type"/>
          <el-option value="cheating" label="Cheating" name="type"/>
          <el-option value="defiant_disobedient" label="Defiant/Disobedient" name="type"/>
          <el-option value="chewing_gum" label="Chewing Gum" name="type1"/>
          <el-option value="disrespectful" label="Disrespectful" name="type"/>
          <el-option value="tardy" label="Tardy" name="type"/>
          <el-option value="profanity" label="Profanity" name="type"/>
          <el-option value="physical_agression" label="Physical Agression" name="type"/>
          <el-option value="harassment" label="Harassment" name="type"/>
          <el-option value="bullying" label="Bullying" name="type"/>
          <el-option value="dress_code_violation" label="Dress Code Violiation" name="type"/>
          <el-optionx value="inappropriat_display_of_affection" label="Inappropriat Display of Affection" name="type"/>
          <el-option value="electronics_violiation" label="Electronics Violiation" name="type"/>
          <el-option value="plagiarism" label="Plagiarism" name="type"/>
          <el-option value="technology_violation" label="Technology Violiation" name="type"/>
          <el-option value="property_misuse" label="Property Misuse" name="type"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Previous">
        <el-select v-model="newIncident.previous_interventions" multiple>
          <el-option value="student_warning" label="Student Warning" name="type"/>
          <el-option value="parent_note_by_teacher" label="Parent Note by Teacher" name="type"/>
          <el-option value="indivdual_academic_plan" label="Individual Academic Plan" name="type"/>
          <el-option value="parent_contact_by_teacher" label="Parent Contact By Teacher" name="type"/>
          <el-option value="parent_conference_with_teacher" label="Parent Conference With Teacher" name="type"/>
          <el-option value="previous_referral_to_office" label="Previus Referral To Office" name="type"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Other Info.">
        <el-col :span="11">
          <el-input v-model="newIncident.specific_information" type="textarea"/>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onReset">Reset Form</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      newIncident: {
        student_first_name: '',
        student_middle_name: '',
        student_last_name: '',
        student_grade: '',
        incident_type: '',
        date_of_incident: '',
        class_period: '',
        specific_behaviors: '',
        previous_interventions: '',
        specific_information: '',
        action_taken_by_admin: '',
        parent_requests: '',
        teacher_comments: '',
        admin_comments: ''
      }
    }
  },
  methods: {
    onSubmit() {
      var data = this.newIncident
      axios.post('http://localhost:8010/api/incidents', data)
      this.$message('Referral has been submitted!')
    },
    onReset() {
      this.$message({
        message: 'Form has been reset!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
