const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("./models/http-error");
const routes = require("./routes/routes");
const navs = require("./routes/_nav");
const texts = require("./routes/texts");
const contact = require("./routes/contact");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/routes", routes);
app.use("/api/navs", navs);
app.use("/api/texts", texts);
app.use("/api/contact", contact);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error); // Use next() instead of throw
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

server.listen(5001, () => console.log("Listening to port 5001"));
