// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');

// DATABASE CONNECTION ----------------------------------------------------------------- 
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
});

// MIDDLEWARE ----------------------------------------------------------------- 
app.use(express.static(path.join(__dirname, "public")));

// GET / HOME ----------------------------------------------------------------- 
// ( path , callback)
// they entent to have folder called views
app.get('/',(req, res)=>{
    res.render('index.ejs')
});


// live ----------------------------------------------------------------- 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});