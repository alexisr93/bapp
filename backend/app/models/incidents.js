var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    incident_id: Number,
    student_id: Number,
    student_first_name: String,
    student_last_name: String,
    student_grade: Number,
    incidents: {
        referral_incident: {
            r_incident_id: Number,
            referring_staff: String,
            class_period: Number,
            date_of_incident: Date,
            date_of_referral: {type: Date, default: Date.now},
            date_updated: {type: Date, default: Date.now},
            problem_behavior: {
                lack_of_work: {type: Boolean, default: false},
                unprepared: {type: Boolean, default: false},
                off_task: {type: Boolean, default: false},
                misconduct: {type: Boolean, default: false},
                throwing_objects: {type: Boolean, default: false},
                cheating: {type: Boolean, default: false},
                defiant_disobedient: {type: Boolean, default: false},
                gum_chewing: {type: Boolean, default: false},
                disrespectful: {type: Boolean, default: false},
                tardy: {type: Boolean, default: false},
                profanity: {type: Boolean, default: false},
                physical_aggression: {type: Boolean, default: false},
                harassment: {type: Boolean, default: false},
                bullying: {type: Boolean, default: false},
                dress_code_violation: {type: Boolean, default: false},
                inapp_display_of_affection: {type: Boolean, default: false},
                electronics_violation: {type: Boolean, default: false},
                plagiarism: {type: Boolean, default: false},
                technology_violation: {type: Boolean, default: false},
                property_misuse: {type: Boolean, default: false},
                other: [String]
            },
            specific_information: String,
            previous_teacher_intervention: {
                student_warning: {type: Boolean, default: false},
                parent_note_by_teacher: {type: Boolean, default: false},
                individual_academic_plan: {type: Boolean, default: false},
                parent_contact_by_teacher: {type: Boolean, default: false},
                parent_conference_with_teacher: {type: Boolean, default: false},
                previous_referral_to_office: {type: Boolean, default: false}
            },
            action_taken_by_administration: {
                conference_with_student: {type: Boolean, default: false},
                parent_contact: {type: Boolean, default: false},
                detention: {type: Boolean, default: false},
                in_school_suspension: {type: Boolean, default: false},
                out_of_school_suspension: {type: Boolean, default: false},
                counselor_referral: {type: Boolean, default: false},
                campus_beautification: {type: Boolean, default: false},
                behavior_contract: {type: Boolean, default: false},
                attendance_contract: {type: Boolean, default: false},
                other: String
            },
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
