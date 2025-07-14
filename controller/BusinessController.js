const express = require('express');
const router = express.Router();
const Business = require('../models/business');

// ALL ROUTES IN THIS FILE HAS /businesses " / "

// rest route 
router.get('/', async (req, res) => {
    const allBusinesses = await Business.find() //emprt () will bring all data
    console.log('allBusinesses', allBusinesses)
    res.render('Businesses/index.ejs', { allBusinesses: allBusinesses})
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

// SHOW ONE BUSINESS /: params
router.get('/:businessId', async(req, res)=>{
  const foundBusiness = await Business.findById(req.params.businessId)
  res.render('businesses/show.ejs',{foundBusiness: foundBusiness})
})

module.exports = router;