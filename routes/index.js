const express = require("express");
const router = express.Router();

const { homePage, dashboard } = require("../controllers/index");
const { isAuthenticated, isGuest } = require("../middlewares/isAuthenticated");
router.route("").get(isGuest, homePage);
router.route("/dashboard").get(isAuthenticated, dashboard);

module.exports = router;
