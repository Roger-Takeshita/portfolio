const passport = require('passport');                                         //! Require passport package
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;       //! Require google strategy after passport
const User = require('../models/userSchema');                                 //! Require database schema

passport.use(new GoogleStrategy(
   {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
   },
   function(accessToken, refreshToken, profile, cb) {
      User.findOne({ 'googleId': profile.id }, function(err, user) {
         if (err) return cb(err);
         if (user) {
            return cb(null, user);
         } else {                                              //+ we have a new user via OAuth!
            let newUser = new User({
               firstName: profile.name.givenName,
               lastName: profile.name.familyName,
               email: profile.emails[0].value,
               photo: profile.photos[0].value,
               googleId: profile.id
            });
            newUser.save(function(err) {
               if (err) return cb(err);
               return cb(null, newUser);
            });
         }
      });
   }
));

passport.serializeUser(function(user, done) {                  //+ Get the id
   done(null, user.id);
});

passport.deserializeUser(function(id, done) {                  //+ Use the id to find a user in our database
   User.findById(id, function(err, user) {
      done(err, user);
   });
});