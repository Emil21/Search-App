/* File name : Route.js
 File Description: Handling all the routes to the application */
 const express = require('express');
 const apiLayer =  require('./../src/apiLayer/apilayer');
 
 const router = express.Router();
 

 router.get('/typeahead', apiLayer.typeahead);
 router.get('/getdata', apiLayer.getData);
 router.get('/getDuckResults', apiLayer.getDuckResutls);

 
 
 module.exports = router;
 