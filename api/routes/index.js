var express = require('express')
var app = express()
const Poc = require('../models/poc')

// @route   GET api/allpocs
// @desc    Gets all existing PoC's in database
// @access  Public

app.get('/allpocs', function(req, res) {
  Poc.find((err, poc) => {
    res.json(poc)
  }).catch(err => {
    console.log(err)
  })
})

// @route   POST api/insertpoc
// @desc    Saves our form data
// @access  Public

app.post('/insertpoc', function(req, res) {
  const savepoc = new Poc({
    fname,
    lname,
    email,
    message
  })

  savepoc
    .save()
    .then(() => {
      res.status(200).json({ poc: 'your poc was saved' })
    })
    .catch(err => {
      res.status(400).send('unable to save to database')
      console.log(err)
    })
})

module.exports = { path: '/api/', handler: app }
