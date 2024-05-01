const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/database");

dotenv.config();

database.connect();

const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");
const app = express();

const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

// Routes
routeAdmin(app);
routeClient(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
