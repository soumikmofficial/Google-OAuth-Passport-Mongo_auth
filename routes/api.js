const express = require("express");
const router = express.Router();

const { getAllUsers, createUser } = require("../controllers/api");

router.route("/users/").get(getAllUsers).post(createUser);

module.exports = router;
