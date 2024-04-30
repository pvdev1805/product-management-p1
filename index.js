const express = require("express");
const app = express();

const route = require("./routes/client/index.route");

const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
route(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
