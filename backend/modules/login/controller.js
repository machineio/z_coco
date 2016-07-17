// Import Libs to use
var db = require('./db.js');
var gv = require(__dirname + '/../general/config.js');
var Promise = require('bluebird');

exports.login = function(){
	return {
		doLogin: function(data){
			return new Promise(function(resolve){
				console.log('DATA!!!!',data);
				db.login.doLogin(data.email,data.password,data.keep_me_sign_in)
					.then(function(responseData){
						var response = {
							status: true,
							message: "Your data",
							data: responseData
						};
						resolve(response);
					})
					.catch(function(err){
						var response = {
							status: false,
							message: 'Error',
							data: err
						};
						resolve(response);
					});

				// db.general.checkApiKeyStatus(APIKEY)
				// 	.then(function(project){
				// 		db.device.register(project,data,function(err,registerDeviceStatus){
				// 			var response = {
				// 				status: true,
				// 				data: registerDeviceStatus
				// 			};
				// 			resolve(response);
				// 		});
				// 	})
				// 	.catch(function(err){
				// 		var response = {
				// 			status: false,
				// 			data: err
				// 		};
				// 		resolve(response);
				// 	});
			});
		},
	}
}();