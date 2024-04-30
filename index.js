const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const route = require("./routes/client/index.route");
const app = express();

const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// Routes
route(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
