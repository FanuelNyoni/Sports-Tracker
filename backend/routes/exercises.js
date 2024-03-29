//need express router

const router  = require('express').Router();

//require the mongoose model
let Exercise = require('../models/exercise.model');

//creating paths for different URL requests
router.route('/').get((req, res) => {
    Exercise.find() //returns a promise
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(()=> res.json('Exercises added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findById(req.params.id)
        .then(() => res.json('Exercises deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date); 
        
            exercise.save()
                .then(()=> res.json('Exercise updated'))
                .catch(err => res.status(4000).json('Error: ' + err));
        })
        .catch(err => res.status(4000).json('Error: ' + err));    
});

module.exports = router;