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
    incident_details: {
        referral_incident: {
            r_incident_id: Number,
            referring_staff: String,
            class_period: Number,
            date_of_incident: Date,
            date_of_referral: {type: Date, default: Date.now},
            date_updated: {type: Date, default: Date.now},
            problem_behavior: String,
            specific_information: String,
            previous_teacher_intervention: '',
            action_taken_by_administration: '',
            parent_requests: String
        },
        other_incident: {
            o_incident_id: Number,
            reporting_staff: String,
            date_of_incident: Date,
            class_period: Number,
            teacher_comments: [String],
            admin_comments: [String]
        }
    }
});
module.exports = mongoose.model('Incident', IncidentSchema);
