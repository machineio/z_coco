// Import Libs to use
var db = require('./db.js');
var gv = require(__dirname + '/../general/config.js');
var Promise = require('bluebird');

exports.users = function(){
	return {
		doLogin: function(data){
			return new Promise(function(resolve){
				console.log('DATA!!!!',data);
				db.users.doLogin(data.email,data.password,data.keep_me_sign_in)
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
			});
		},
		doRegister: function(data){
			return new Promise(function(resolve){
				db.users.checkUserExists(data.email)
					.then(function(){
						db.users.doRegister(data.email,data.password,data.accept_license_aggrement)
							.then(function(userData){
								delete userData.password;
								delete userData._id;
								var response = {
									status: true,
									message: 'ok',
									data: userData
								}
								resolve(response);
							})
							.catch(function(err){
								var response = {
									status: false,
									message: 'There is something wrong',
									data: err
								}
								resolve(response);
							});
					})
					.catch(function(err){
						var response = {
							status: false,
							message: 'Email error',
							data: err
						}
						resolve(response);
					});
			});
		},
	}
}();