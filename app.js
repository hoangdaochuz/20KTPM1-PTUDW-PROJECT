var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
const paginate = require('express-paginate');

const hbs  = require('hbs')
var dashboardRouter = require('./routes/dashboardRouter');
const productsRouter = require('./routes/productsRouter');
const analyticsRouter = require('./routes/analyticsRouter');
const accountsRouter = require('./routes/accountsRouter');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');
const orderApiRouter = require('./routes/orderApiRouter')
const indexRouter = require('./routes/indexRouter')
// const authRouter = require('./routes/authRouter');
const authRouter = require("./auth/authRouter");
const categoryApiRouter = require('./routes/categoryApiRouter')
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

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(fileUpload());
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

hbs.handlebars.registerHelper('compareStrings', function(p, q, options) {
  console.log("P: " + p + " Q: " + q)
  return (p == q) ? options.fn(this) : options.inverse(this);
});

app.use(paginate.middleware(5, 20));

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
app.use('/orders', orderRouter)
app.use('/api/orders', orderApiRouter)
app.use('/api/category', categoryApiRouter)
app.use('/accounts', accountsRouter)

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
