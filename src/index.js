const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded(
    express.urlencoded({
      extended: true,
    })
  )
);
app.use(express.json());

//XML, HTTP, FETCH, AXIOS, POSTMAN, CURL, etc

//HTTP Logger
// app.use(morgan("combined"));

// Teamplate engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
