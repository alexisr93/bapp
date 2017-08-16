var cors = require('cors')
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var incident_id_count = 0;
// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8010;

//API Routes
var router = express.Router();

//All routes will be prefixed with /api
app.use('/api', router);

router.use(function(req, res, next) {
    console.log('Something touched the API ! D:');
    next(); // use next() to go to the next route without stopping here
});


//INCIDENT ROUTES
/////////////////////////////////////////
router.route('/incidents')

//Creates a new incident
.post(function(req, res) {
    var incident = new Incident();      // creates new instance of the Incident model
    incident.incident_id = incident_id_count;  // sets tings (comes from the request)
    incident.student_first_name = req.body.fname;
    incident.student_last_name = req.body.lname;
    incident.student_grade = req.body.grade;
    incident.incidents.referral_incident.class_period = req.body.classperiod;

    incident_id_count = incident_id_count + 1;
    // save the student and check for errors
    incident.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({message: 'Incident saved' });
    });
})

//Shows all incidents in collection
.get(function(req, res){
    Incident.find(function(err, incidents){
        if(err){
            res.send(err);
        }
        res.json(incidents);
    });
});


router.route('/incidents/:incident_id')

//Gets incident with specific incident_id
.get(function(req, res){
    Incident.findOne({incident_id: req.params.incident_id}, function(err, incident){
        if(err){
            res.send(err);
        }
        res.json(incident);
    });
})

//Updates first and last name of a student in incident specified by incident_id
.put(function(req, res){
    Incident.findOne({incident_id: req.params.incident_id}, function(err, incident){
        if(err){
            res.send(err);
        }
        incident.student_first_name = req.body.fname;
        incident.student_last_name = req.body.lname;

        incident.save(function(err) {
            if (err){
                res.send(err);
            }
            res.json({message: 'Incident updated' });
        });
    });
})

//Delete a incident with a specific incident_id
.delete(function(req, res){
    Incident.remove({incident_id: req.params.incident_id}, function(err, incident){
        if(err){
            res.send(err);
        }
        res.json(incident);
    });
});


//STUDENT ROUTES
/////////////////////////////////////////
router.route('/students')

//Creates a new student
.post(function(req, res) {
    var student = new Student();      // creates new instance of the Student model
    student.student_id = student_id_count;  // sets tings (comes from the request)
    student.student_first_name = req.body.fname;
    student.student_last_name = req.body.lname;
    student.student_grade = req.body.grade;
    student.students.referral_student.class_period = req.body.classperiod;

    student_id_count = student_id_count + 1;
    // save the student and check for errors
    student.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({message: 'student saved' });
    });
})

//Shows all students in collection
.get(function(req, res){
    Student.find(function(err, students){
        if(err){
            res.send(err);
        }
        res.json(students);
    });
});


router.route('/students/:student_id')

//Gets student with specific student_id
.get(function(req, res){
    student.findOne({student_id: req.params.student_id}, function(err, student){
        if(err){
            res.send(err);
        }
        res.json(student);
    });
})

//Updates first and last name of a student in student specified by student_id
.put(function(req, res){
    student.findOne({student_id: req.params.student_id}, function(err, student){
        if(err){
            res.send(err);
        }
        student.student_first_name = req.body.fname;
        student.student_last_name = req.body.lname;

        student.save(function(err) {
            if (err){
                res.send(err);
            }
            res.json({message: 'Student updated' });
        });
    });
})

//Delete a student with a specific student_id
.delete(function(req, res){
    Student.remove({student_id: req.params.student_id}, function(err, student){
        if(err){
            res.send(err);
        }
        res.json(student);
    });
});


//Server is started here
app.listen(port);
console.log('Everything goes through ' + port);

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/bappDB'); // connects to database

var Student = require('./app/models/students');
var Incident = require('./app/models/incidents');
