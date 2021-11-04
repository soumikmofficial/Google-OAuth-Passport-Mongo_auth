const express = require("express");
const connectDB = require("./config/connect");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const app = express();

require("dotenv").config();

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

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
