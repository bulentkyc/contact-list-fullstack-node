const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("public"));

const router = require("./controller/router");

app.set("views", __dirname + "/view");
app.set("view engine", "pug");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
