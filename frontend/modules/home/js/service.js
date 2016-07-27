materialAdmin
	
	.service('mailgunService', [function(){
		this.getApiKey = function(){
			var user = JSON.parse(localStorage.getItem('user'));
			var apikeys = user.mailgun_conf.apikeys
			console.log('APIKEYS!!!',apikeys);
			for(var i=0;i<apikeys.length;i++){
				if(apikeys[i].domain_name==='General'){
					var apikeySting = 'api:' + apikeys[i].domain_apikey;
					console.log('apikeySting',apikeySting);
					return 'Basic ' + btoa(apikeySting);
				}
			}
		}
	}]);