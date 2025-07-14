const express = require('express');
const router = express.Router();
const Business = require('../models/business');


// rest route 
router.get('/', (req, res) => {
});

// RENDER NEW BUSINESS
router.get('/new',(req, res) => {
    res.render('businesses/new.ejs')
});

// POST FORM DATA TO DATABASE
router.post('/', async (req, res) => {
    if (req.body.isVerified === 'on') {
        req.body.isVerified = true;
    } else {
        req.body.isVerified = false;
    }
    console.log(req.body);
    await Business.create(req.body)
    
    // get back to same page
    res.redirect('/businesses/new')
})



module.exports = router;