//need express router

const router  = require('express').Router();

//require the mongoose model
let User = require('../models/user.model');

//creating paths for different URL requests
router.route('/').get((req, res) => {
    User.find() //returns a promise
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(()=> res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;