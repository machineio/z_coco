// text/javascript
// app.js

// BASE SETUP
// =============================================================================

// Import Modules
var express    	= require('express'); 		// call express
var app        	= express(); 				// define our app using express
var bodyParser 	= require('body-parser');
var login_controller 	= require('./modules/login/controller.js');
var router      = require('./modules/general/router.js')
var config		= require('./modules/general/config.js');

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
};

app.use(allowCrossDomain);
// app.use(bodyParser());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

var port 	= config.app.http_server.port; 		// set port
var server 	= config.app.http_server.host;		// set server

// ROUTES FOR API
// =============================================================================
var login = express.Router();


// REGISTER OUR ROUTES
// =============================================================================
app.use(router.loginModule.login, login);


// middleware to use for all requests
// =============================================================================
login.use(function(req, res, next) {
    console.log(JSON.stringify({ date:new Date(), route:'Login', method:req.method, url:req.url }));
    next();
});


// Define the methods
// =============================================================================
login.post('/', function(req,res){
    login_controller.login.doLogin(req.body)
        .then(function(response){
            res.json(response);
        });

});

login.post('/register', function(req,res){
    login_controller.login.doRegister(req.body)
        .then(function(response){
            res.json(response);
        });

});

login.post('/forgotPassword', function(req,res){
    login_controller.login.doForgotPassword(req.body)
        .then(function(response){
            res.json(response);
        });

});

// deviceToken.get('/queue', function(req,res){
//     controller.push.getQueue()
//         .then(function(response){
//             res.json(response);
//         });
// });

// //  TEST
// deviceToken.post('/setupPush', function(req,res){
//     // console.log("JSONDATA RAW!!!");
//     // console.log(req.body);
//     // console.log(typeof req.body);
//     var jsonData = {
//         apikey: req.body.apikey,
//         processID: req.body.processID,
//         chunk: req.body.chunk
//     };
//     controller.push.setupPushSend(jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// deviceToken.get('/getSegment', function(req,res){
//     var jsonData = {
//         processID: req.query.processID,
//         segmentID: req.query.segmentID
//     };
//     controller.push.getSegment(jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// deviceToken.post('/markSegment', function(req,res){
//     var jsonData = {
//         apikey: req.body.apikey,
//         processID: req.body.processID,
//         segmentID: req.body.segmentID,
//         status: req.body.status
//     };
//     controller.push.markSegment(jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// deviceToken.post('/sendMessage', function(req,res){
//     var jsonData = {
//         token: req.body.token,
//         platform: req.body.platform,
//         title: req.body.title,
//         message: req.body.message
//     };
//     controller.push.sendMessage(jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// // projects ROUTE
// deviceToken.route('/projects')

//     // Get All Active projects
//     .get(function(req,res){
//         controller.projects.getProjects()
//             .then(function(response){
//                 res.json(response);
//             });
//     })

//     // Post New project
//     .post(function(req,res){
//         var jsonData = JSON.parse(req.body.jsonData);
//         controller.projects.postProject(jsonData)
//             .then(function(response){
//                 res.json(response);
//             });
//     });


// // Post Device Registry
// deviceToken.post('/:apiKey/register',function(req,res){
//     var apiKey = req.params.apiKey;
//     var jsonData = JSON.parse(req.body.jsonData);
//     console.log('APIKEY:',apiKey);
//     console.log('json:',jsonData);
//     controller.device.register(apiKey,jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// deviceToken.get('/:apiKey/charts/device',function(req,res){
//     var apiKey = req.params.apiKey;
//     console.log('IN HERE');
//     controller.charts.getDeviceChart(apiKey)
//         .then(function(response){
//             res.json(response);
//         });
// });

// // Send Push Message
// deviceToken.post('/:apiKey/sendMessage',function(req,res){
//     var apiKey = req.params.apiKey;
//     var jsonData = JSON.parse(req.body.jsonData);
//     console.log('APIKEY:',apiKey);
//     console.log('json:',jsonData);
//     controller.message.send(apiKey,jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// // Send Push Message - Individual Message
// deviceToken.post('/:apiKey/sendIndividualMessage',function(req,res){
//     var apiKey = req.params.apiKey;
//     var jsonData = JSON.parse(req.body.jsonData);
//     console.log('APIKEY:',apiKey);
//     console.log('json:',jsonData);
//     controller.message.sendInvidual(apiKey,jsonData)
//         .then(function(response){
//             res.json(response);
//         });
// });

// // Get devices of promo
// deviceToken.get('/:apiKey/devices',function(req,res){
//     var apiKey = req.params.apiKey;
//     controller.projects.getDevices(apiKey)
//         .then(function(response){
//             res.json(response);
//         });
// });


// START THE SERVER
// =============================================================================
app.listen(port,server);
console.log("// ============================================================================= //");
console.log("// =                                                                           = //");
console.log("// =                 Server running on port " + port + " of " + server + "                    = //");
console.log("// =                                                                           = //");
console.log("// ============================================================================= //");