/* File name : index.js
 File Description: Start the application at specified port */

 const app =  require('./config/express.js') ;
 const config =  require('./config/config.js') ;
 
 
 app.listen(config.port, function() {
     console.info(`server started on port ${config.port}`);
 });
 
 