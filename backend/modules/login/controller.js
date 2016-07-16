// Import Libs to use
var db = require(__dirname + '/db.js');
var gv = require(__dirname + '/globals.js');
var apn = require(__dirname + '/apnpush.js');
var gcm = require(__dirname + '/gcmpush.js');
var Promise = require('bluebird');

function SendPushNotification(message, apnprofile) {

	console.log('SEND PUSH NOTIFY');

	apnprofile = apnprofile || "";

	if (message.deviceplatform == "iOS") {
		apn.SendAPN_Message(message, apnprofile);
	}
	else {
		gcm.SendGCM_Message(message);
	}
}

exports.device = function(){
	return {
		register: function(APIKEY,data){
			return new Promise(function(resolve){
				db.general.checkApiKeyStatus(APIKEY)
					.then(function(project){
						db.device.register(project,data,function(err,registerDeviceStatus){
							var response = {
								status: true,
								data: registerDeviceStatus
							};
							resolve(response);
						});
					})
					.catch(function(err){
						var response = {
							status: false,
							data: err
						};
						resolve(response);
					});
			});
		}
	};
}();