const homePage = (req, res) => {
  res.send("<h1>Home Page</h1>");
};
const dashboard = (req, res) => {
  res.send("<h1>Dashboard</h1>");
};

module.exports = { homePage, dashboard };
