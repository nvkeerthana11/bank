const express = require('express');
const router = express.Router();
const Users = require('../model/userSchema');

// GET
router.get('/', (req, res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// ADD
router.post('/add', (req, res) => {
    const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        accno: req.body.accno,
        balance: req.body.balance
    });

    newUser
        .save()
        .then(() => res.json("user added successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));

});
// BY ID
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;