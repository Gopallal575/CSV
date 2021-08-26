const mongoose=require('mongoose');




mongoose.connect('mongodb+srv://samir:mongo@1234@cluster0.dhmfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true });

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to database','error'));

db.once('open',function()
{
    console.log("Connected to Database :DB");
});



module.exports=db;