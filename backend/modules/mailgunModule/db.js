//  Import Libs to use
var mongodb     = require('mongodb');
var ObjectId    = require('mongodb').ObjectID;
var gv          = require('../general/config.js');
var uuid        = require('node-uuid');
var math = require('math');
var Promise = require('bluebird');
var mailgun = require('mailgun.js');

// Define Server variables
var DB = gv.app.db_server;

// Function to create the DB instance
var connectDB = function (dbName) {
    return new Promise(function(resolve,reject){
        var dbConnect = {};
        var server = new mongodb.Server(DB.host, DB.port, {
            auto_reconnect: true
        });
        if (dbName === false) {
            dbConnect = new mongodb.Db(DB.db, server, {
                safe: false
            });
            dbConnect.open(function (err, db) {
                if(err){
                    reject(err);
                } else {
                    resolve(db);
                }
                // callback(err, db);
            });
        } else {
            dbConnect = new mongodb.Db(dbName, server, {
                safe: false
            });
            dbConnect.open(function (err, db) {
                if(err){
                    reject(err);
                } else {
                    resolve(db);
                }
                // callback(err, db);
            });

        }
    });
};

exports.domains = function(){
    return {
        getDomains: function(apikey){
            console.log('HERE!!!',apikey);
            var mg = mailgun.client({username: 'api', key: apikey});
            mg.messages.list('binarymachine.io')
                .then(function(domains){
                    console.log('DOMAINS DATA!!!',domains);
                    resolve(domains)
                }) // logs array of domains
                .catch(function(err){
                    console.log('ERROR',err);
                    reject(err);
                }); // logs any error
        }
    }
}();