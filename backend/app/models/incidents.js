var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    incident_id: Number,
    student_id: Number,
    student_first_name: String,
    student_middle_name: String,
    student_last_name: String,
    student_grade: String,
    incident_type: String,
    date_of_incident: Date,
    class_period: Number,
    specific_behaviors: String,
    previous_interventions: String,
    specific_information: String,
    action_taken_by_admin: String,
    parent_requests: String,
    teacher_comments: String,
    admin_comments: String
});
module.exports = mongoose.model('Incident', IncidentSchema);
