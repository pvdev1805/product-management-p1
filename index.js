const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/products", (req, res) => {
  res.send("Product List");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
