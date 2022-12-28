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
const authApiRouter = require('./auth/api')
const productApiRouter = require('./routes/APIRoutes/productApiRouter');
const cartApiRouter = require('./routes/APIRoutes/cartApiRouter');
const profileApiRouter = require('./routes/APIRoutes/profileApiRouter')
const session = require("express-session");
const passport = require('./auth/passport/index')

const MySQLStore = require('connect-mysql')(session)
const options = {
  config:{
    host:'localhost',
    user:'root',
    password: '280502',
    database: 'session-db'
  }
}

const paginate = require('express-paginate')

const cors = require('cors')


var app = express();

// view engine setup

app.use(cors(
  { 
    origin: 'http://127.0.0.1:3000',
    credentials: true,

  }
))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');
hbs.handlebars.registerHelper("minus", (a,b)=>{
  return a-b
})
var blocks = {};

hbs.handlebars.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.handlebars.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});

app.use(paginate.middleware(5, 20))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var sess = {
  name:  'connect.sid',
  secret: 'very secret keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, 
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 3,
    expires: 1000 * 60 * 60 * 24 * 3,
  },
  // store: new MySQLStore(options)
}

if(app.get('env') === 'production'){
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}

app.use(session(sess))
app.use(passport.authenticate('session'));


app.use((req,res,next)=>{
  res.locals.user = req.user
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/products", productRouter)
app.use("/api/products", productApiRouter)
app.use("/auth", authRouter);

//api
app.use('/api/auth',authApiRouter);
app.use("/cart", shoppingCartRouter)

app.use("/api/cart", cartApiRouter);
app.use("/checkout", checkoutRouter)
app.use("/profile", profileRouter)

app.use("/api/profile", profileApiRouter)
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
