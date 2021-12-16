const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy


passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL:process.env.GOOGLE_URL,
    passReqToCallback:true
},function(request,accessToken,refreshToken,profile,done){
    console.log(profile);
    return done(null,profile)
}
));

