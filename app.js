var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const hbs  = require('hbs')
var indexRouter = require("./routes/home");
var usersRouter = require("./routes/users");
const {aboutRouter} = require("./routes/aboutRouter")
const {shoppingCartRouter} = require("./routes/shoppingCartRouter")
const {checkoutRouter} = require("./routes/checkoutRouter")
const productRouter = require('./routes/productRouter')
const authRouter = require("./auth/authRouter");
const profileRouter = require("./routes/profileRouter")
const session = require("express-session");
const passport = require('./auth/passport/index')
var app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.use(session({
  secret: 'very secret keyboard cat',
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.authenticate('session'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next)=>{
  res.locals.user = req.user
  console.log(req.user)
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/products", productRouter)
app.use("/auth", authRouter);
app.use("/cart", shoppingCartRouter)
app.use("/checkout", checkoutRouter)
app.use("/profile", profileRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
