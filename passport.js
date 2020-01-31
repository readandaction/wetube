import passport from "passport";
import User from "./models/User";

passport.use(User.createStatergy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
