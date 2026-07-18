import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../model/user.model";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Find user in DB
      const user = await User.findOne({email});
      if(!user){
        const {email, password} = req.body
      }
      // If doesn't exist create
      // return done(null,user)
    },
  ),
);

