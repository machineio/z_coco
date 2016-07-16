//  Import Libs to use
var mongodb     = require('mongodb');
var ObjectId    = require('mongodb').ObjectID;
var gv          = require(__dirname + '/globals.js');
var uuid        = require('node-uuid');
var math = require('math');
var Promise = require('bluebird');

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

exports.general = function(){
    return {
        createApiKey: function(){
            return uuid.v1();
        },
        checkApiKeyStatus: function(APIKEY){
            return new Promise(function(resolve,reject){
                connectDB(false)
                    .then(function(db){
                        var projects = db.collection('projects');
                        projects.find({apiKey:APIKEY}).toArray(function(err,project){
                            if(err){
                                db.close();
                                reject(err);
                            } else {
                                if(project.length>0){
                                    db.close();
                                    resolve(project[0]);
                                } else {
                                    db.close();
                                    reject("No project Asign To that APIKey.");
                                }
                            }
                        });
                    })
                    .catch(function(err){
                        console.log(err);
                        reject(err);
                    });
            });
        },
        apiKeyExists: function(APIKEY){
            return new Promise(function(resolve,reject){
                connectDB(false)
                    .then(function(db){
                        var apiKeys = db.collection('apiKeys');
                        console.log('ApiKey:',APIKEY);
                        apiKeys.find({apiKey:APIKEY}).toArray(function(err,result){
                            console.log('RESULT:',result);
                            if(result){
                                if(result.length>0){
                                    db.close();
                                    resolve(true);
                                } else {
                                    db.close();
                                    reject("That ApiKey does not exists.");
                                }
                            } else {
                                db.close();
                                reject(err);
                            }
                        });
                    })
                    .catch(function(err){
                        console.log(err);
                        reject(err);
                    });
            });
        }
    };
}();