const express = require("express");
const passport = require("passport");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const ExpressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const connectDB = require("./config/connect");
const authRouter = require("./routes/auth");
const app = express();

require("dotenv").config();
require("./config/passport")(passport);

app.use(ExpressLayouts);
app.set("view engine", "ejs");

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);
app.use("/auth", authRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`app is running on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
