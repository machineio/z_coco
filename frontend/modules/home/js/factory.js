materialAdmin
	.config(function($httpProvider) {
	  $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	})

	.factory('mailgunFactory',['$http', 'mailgunService', function($http, mailgunService){
		return {
			getDomains: function(){
				return new Promise(function(resolve,reject){
					delete $http.defaults.headers.common['X-Requested-With'];
					var apikey = mailgunService.getApiKey();
					var url = 'https://api.mailgun.net/v3/domains';
					console.log('IN FACTORY',apikey,url);
					$http.get(url,{headers:{'Authorization': apikey}}).then(function(success,err){
						console.log('SUCCESS ERROR',success, err);
						// if(data.status===true){
						// 	console.log('DATA!!!',data.items);
						// 	// localStorage.setItem('user',JSON.stringify(data.data));
						// 	resolve(data.items);
						// } else {
						// 	console.log('SOMETHING ELSE',data);
						// 	// reject(data);
						// }
					});
				})
			},
		}
	}]);