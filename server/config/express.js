
const express = require('express');
const cors = require('cors');
const router = require('./../routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const httpError = require('http-errors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new httpError(404)
    return next(err);
  });


  
// error handler, send stacktrace only during development
app.use(function(err, req, res, next){
  
    // customize Joi validation errors
    if (err.isJoi) {
      err.message = err.details.map(e => e.message).join("; ");
      err.status = 400;
    }
  
    res.status(err.status || 500).json({
      message: err.message
    });
    next(err);
});

module.exports = app;
 //export default app;