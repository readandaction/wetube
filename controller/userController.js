export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) => res.render("Log-out");
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("User-detail");
export const editProfile = (req, res) => res.render("User-profile");
export const changePassword = (req, res) => res.render("Change-password");
