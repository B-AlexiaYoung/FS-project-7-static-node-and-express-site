const express = require('express');
const app = express();
const {data} = require("./data.json");

// set static routing and view engine for pug
app.use("/static", express.static("public"));
app.use("/img", express.static('img'))
app.set("view engine", "pug");
const routes = require("./routes");

app.use(routes);


app.listen(3000);