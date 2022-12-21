var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');

const hbs  = require('hbs')
var dashboardRouter = require('./routes/dashboardRouter');
const productsRouter = require('./routes/productsRouter');
const analyticsRouter = require('./routes/analyticsRouter');
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/indexRouter')
// const authRouter = require('./routes/authRouter');
const authRouter = require("./auth/authRouter");
const session = require("express-session");
const passport = require('./auth/passport/index')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(session({
  secret: 'very secret keyboard cat',
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.authenticate('session'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use((req,res,next)=>{
  res.locals.user = req.user
  console.log(req.user)
  next();
});
app.use('/', indexRouter)
app.use('/dashboard', dashboardRouter);
app.use('/products', productsRouter )
app.use('/auth', authRouter)
app.use('/analytics', analyticsRouter)
app.use('/user', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
