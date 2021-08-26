const express=require('express');

// creating express app
const app=express();
const cors = require("cors");
const flash = require('connect-flash');
const session = require('express-session');

const port=process.env.PORT || 8000;

//  requiring Database
const db=require('./config/mongoose');
const cokkiesparser=require('cookie-parser');
// using passport lib for authentication



// using middlewares

app.use(express.urlencoded());
app.use(cokkiesparser());

app.use('/uploads',express.static(__dirname +'/uploads'));


app.set('view engine','ejs');
app.set('views','./view');
//---------Express Session----------//
app.use(
     session({
         secret: 'secret',
         resave: true,
         saveUninitialized: true
     })
 );
 
 //---------Connect Flash----------//
 app.use(flash());
 
 //---------Global Variables----------//
 app.use(function (req, res, next) {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error = req.flash('error');
     next();
 });
 
app.use(cors());
// setting our routes 
app.use('/',require('./route'));

//  firing server here 
app.listen(port,function(err)
{
     if(err)  {
          console.log(`Error in running server:${port}`);
          return;
     }

     console.log(`Surver is up and Running at Port :${port}`); 
     return;
});