const homePage = (req, res) => {
  res.render("home");
};
const dashboard = (req, res) => {
  res.send("<h1>Dashboard</h1>");
};

module.exports = { homePage, dashboard };
