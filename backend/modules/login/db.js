//  Import Libs to use
var mongodb     = require('mongodb');
var ObjectId    = require('mongodb').ObjectID;
var gv          = require('../general/config.js');
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

exports.login = function(){
    return {
        doLogin: function(email,password,keep_me_sign_in){
            return new Promise(function(resolve,reject){
                connectDB(false)
                    .then(function(db){
                        var users = db.collection('users');
                        users.find({"email":email,"password":password}).toArray(function(err,usersData){
                            if(err){
                                console.log(err);
                                reject(err);
                            } else {
                                if(usersData.length>0){
                                    db.close();
                                    var user = usersData[0];
                                    users.update({"email":email,"password":password},{$set:{"keep_me_sign_in":keep_me_sign_in}})
                                    user.keep_me_sign_in = true;
                                    delete user.password;
                                    resolve(user);
                                } else {
                                    db.close();
                                    reject('No user with that info');
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
    }
}();

// exports.general = function(){
//     return {
//         createApiKey: function(){
//             return uuid.v1();
//         },
//         checkApiKeyStatus: function(APIKEY){
//             return new Promise(function(resolve,reject){
//                 connectDB(false)
//                     .then(function(db){
//                         var projects = db.collection('projects');
//                         projects.find({apiKey:APIKEY}).toArray(function(err,project){
//                             if(err){
//                                 db.close();
//                                 reject(err);
//                             } else {
//                                 if(project.length>0){
//                                     db.close();
//                                     resolve(project[0]);
//                                 } else {
//                                     db.close();
//                                     reject("No project Asign To that APIKey.");
//                                 }
//                             }
//                         });
//                     })
//                     .catch(function(err){
//                         console.log(err);
//                         reject(err);
//                     });
//             });
//         },
//         apiKeyExists: function(APIKEY){
//             return new Promise(function(resolve,reject){
//                 connectDB(false)
//                     .then(function(db){
//                         var apiKeys = db.collection('apiKeys');
//                         console.log('ApiKey:',APIKEY);
//                         apiKeys.find({apiKey:APIKEY}).toArray(function(err,result){
//                             console.log('RESULT:',result);
//                             if(result){
//                                 if(result.length>0){
//                                     db.close();
//                                     resolve(true);
//                                 } else {
//                                     db.close();
//                                     reject("That ApiKey does not exists.");
//                                 }
//                             } else {
//                                 db.close();
//                                 reject(err);
//                             }
//                         });
//                     })
//                     .catch(function(err){
//                         console.log(err);
//                         reject(err);
//                     });
//             });
//         }
//     };
// }();