const express = require("express");
const router = express.Router();

const { homePage, dashboard } = require("../controllers/index");

router.route("").get(homePage);
router.route("/dashboard").get(dashboard);

module.exports = router;
