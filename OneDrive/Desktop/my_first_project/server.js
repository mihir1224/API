const mongoose = require("mongoose");

const express = require("express");

const app = express();

//config
require("dotenv").config();

//middleWare
app.use(express.json());

//user_routes
const userRouters = require("./routes/user_routes");

//api link for user
app.use("/api/user", userRouters);

//connect to database
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("HELLO! DATABASE")
);

app.get("", (req, res) => {
  res.send("connect successfully");
});
app.listen(3000, () => {
  console.log("connect...");
});
