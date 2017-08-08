var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    student_id: Number,
    first_name: String,
    last_name: String,
    grade: String,
    school: String,
    class_schedule: {
        period_1: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_2: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_3: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_4: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_5: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_6: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        },
        period_7: {
            teacher_lastname: String,
            room_number: String,
            course_id: Number
        }
    },
    incidents: [String],
    image: {
        url: String,
        type: String,
        size: String,
        data: String
    }
});

module.exports = mongoose.model('Student', StudentSchema); //first arg is singular name of collection, second arg is making a copy of StudentSchema
