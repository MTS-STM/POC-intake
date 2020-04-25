const express = require("express");
const router = express.Router();

const Poc = require('../models/poc');


// @route   GET api/poc
// @desc    Gets all existing PoC's in database
// @access  Public 

router.get('/', function(req, res){

    console.log(" trying to get the data ")

    Poc
    .find(function(err, poc){ res.json(poc);})
    .catch(err => { console.log( err ) });
});


// @route   POST api/insertpoc
// @desc    Saves our form data
// @access  Public 

router.post('/insertpoc', function(req, res){
  const savepoc = new Poc({
    fname: `${req.query.fname}`,
    lname: `${req.query.lname}`,
    email: `${req.query.email}`,
    message: `${req.query.message}`
  });
  savepoc.save()
    .then(poc => {res.status(200).json({'poc': 'your poc was saved'})})
    .catch(err => {res.status(400).send("unable to save to database")});
});

module.exports = router;
