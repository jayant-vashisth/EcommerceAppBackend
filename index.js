const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/Products");

const port = 5000;
console.log(
  "secret",
  process.env.DATABASE_HOST,
  " or ",
  process.env.MONGODB_URI
);
dotenv.config();
mongoose
  .connect(process.env.DATABASE_HOST)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);

app.get("/", (req, res) => res.send("Hey there!, testing my cicd pipeline"));
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);
