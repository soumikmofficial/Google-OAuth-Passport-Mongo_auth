const homePage = (req, res) => {
  res.render("home", { title: "Log In / Register" });
};
const dashboard = (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
};

module.exports = { homePage, dashboard };
