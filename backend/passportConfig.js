const User = require('./user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
       passport.use(
           new localStrategy((username, password, done) => {
               User.findOne({username: username}, (err, user) => {
                    if(err) throw err;
                    if(!user) return done(null, false);
                    if(user)
                        bcrypt.compare(password, user.password, (err, result) =>{
                            if(err) throw err;
                            if(result === true) {
                                return done(null, user);
                            }
                            else
                            {
                                return done(null, false);
                            }
                        });
               });
           })
       );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        User.findOne({_id : id}, (err, user) => {
            const userInformation = {
                username: user.username,
                firstname: user.firstname,
                email: user.email,
                lastname: user.lastname
            };
            cb(err, userInformation);
        });
    });
}; 

