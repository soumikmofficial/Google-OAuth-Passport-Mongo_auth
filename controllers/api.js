const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { googleID, displayName, firstName, lastName } = req.body;
  console.log(req.body);
  try {
    const user = { googleID, displayName, firstName, lastName };
    await User.create(user);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, createUser };
