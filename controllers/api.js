const User = require("../models/User");

const getAllUsers = async (req, res) => {
  res.send(`all users`);
};

module.exports = { getAllUsers };
