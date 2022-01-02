const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require('./user');
const Query = require('./query')
const app = express();
const url = 'mongodb://127.0.0.1:27017/DreamLog';
//end of imports

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})



//MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({ 
    origin: "http://localhost:3000", //Location of the react app
    credentials: true
}))


app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));


app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//end of middleware

//Routes
app.post("/login", (req,res, next) => {
    passport.authenticate("local", (err,user,info) => {
        if(err) throw err;
        if(!user) res.send("No User Exists");
        else {
            req.logIn(user, err => {
                if(err) throw err;
                res.send('Successfully Authenticated');
                console.log(req.user);
            })
        }
    })(req, res, next);
});

app.get("/user", (req,res) => {
    res.send(req.user); 
    
});

app.post("/register", (req,res) => {
    console.log(req.body.password)
    User.findOne({username: req.body.username}, async (err,doc) => {
        if(err) throw err;
        if (doc) res.send("User Already Exists");
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: hashedPassword
            });
            await newUser.save();
            res.send("User Created");
        }
    })
});


app.post("/queryFile", (req,res) => {
    var myData = new Query(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });




});
//end of routes

app.listen(4000, () =>  {
    console.log('Server has Started');

})
