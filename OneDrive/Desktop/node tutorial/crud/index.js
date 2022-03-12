const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//import routes
const productRouters = require("./routes/product");

//route MiddleWares
app.use("/api/products", productRouters);

//connect to database
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connect to database")
);

app.get("", (req, res) => {
  res.send("HII!! dh❤️");
});
app.listen(8000, () => {
  console.log("abcd");
});
