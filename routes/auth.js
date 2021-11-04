const express = require("express");
const router = express.Router();
const passport = require("passport");

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile"] }));

router
  .route("/google/callback")
  .get(
    passport.authenticate("google", { failureRedirect: "/" }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect("/dashboard");
    }
  );

module.exports = router;
