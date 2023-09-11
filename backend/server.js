require("dotenv").config();
require("./config/database");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const restaurantsRouter = require("./routes/restaurants");
const impressionsRouter = require("./routes/impressions")
const searchAPIRouter = require("./routes/searchAPI");

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", indexRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/", impressionsRouter)
app.use("/search", searchAPIRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});




app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on ${(process.env.PORT || 4000)}`);
});
