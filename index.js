const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("client/pages/home/index", {
    pageTitle: "Homepage",
  });
});

app.get("/products", (req, res) => {
  res.render("client/pages/products/index", {
    pageTitle: "Product List",
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
