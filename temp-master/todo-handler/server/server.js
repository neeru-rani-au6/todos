const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
var path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

//MIDDILWARES
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "build")));

// Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/userRoutes");

// Passport Middleware
app.use(passport.initialize());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Passport Config.
require("./config/passport")(passport);

//ROUTES
app.use("/", indexRoutes);
app.use("/api/v1", userRoutes);

//Catching 404 Error
app.use((req, res, next) => {
  const error = new Error("INVALID ROUTE");
  error.status = 404;
  next(error);
});

//Error handler function
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    app.listen(PORT);
    console.log("server Started");
  })
  .catch((err) => {
    console.log("Error in connecting to DataBase", err.message);
  });

// process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASSWORD)
// "mongodb://127.0.0.1:27017/frontEndProject"
