// Here is where we import modules
// We begin by loading Express
const express = require('express');
const app = express();
const path = require('path');

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