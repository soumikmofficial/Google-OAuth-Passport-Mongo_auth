const homePage = (req, res) => {
  res.render("home");
};
const dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports = { homePage, dashboard };
