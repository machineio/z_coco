// Import Libs to use
var db = require('./db.js');
var gv = require(__dirname + '/../general/config.js');
var usersModule = require('../users/db.js');
var Promise = require('bluebird');

exports.domains = function(){
	return {
		getDomains: function(apikey){
			return new Promise(function(resolve){
				usersModule.users.checkApiKeyStatus(apikey)
					.then(function(userData){
						var apikeys = userData.mailgun_conf.apikeys;
						console.log('APIKEYS!!!',apikeys);
						for(var i=0;i<apikeys.length;i++){
							if(apikeys[i].domain_name==='General'){
								console.log('USER DATA!!',userData);
								db.domains.getDomains(apikeys[i].domain_apikey)
									.then(function(domainsData){
										var response = {
											status: true,
											message: 'Ok',
											data: domainsData
										};
										resolve(response);
									})
									.catch(function(err){
										var response = {
											status: false,
											message: 'Invalid ApiKey',
											data: err
										};
										resolve(response);
									});
							}
						}
					})
					.catch(function(err){
						var response = {
							status: false,
							message: 'Invalid ApiKey',
							data: err
						};
						resolve(response);
					});
			});
		}
	}
}();