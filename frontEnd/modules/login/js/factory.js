materialAdmin
	.factory('loginFactory', ['$http',function($http){
		return {
			doLogin: function(sendData){
				return new Promise(function(resolve,reject){
					var url = "http://localhost:9090/login";
					$http({
						method:'POST',
						url:url,
						data: JSON.stringify(sendData),
						headers:{'Content-Type':'application/json'}
					}).
					success(function(data,status,headers,config){
						if(data.status===true){
							localStorage.setItem('user',JSON.stringify(data.data));
							resolve(data.data);
						} else {
							console.log('SOMETHING ELSE',data);
							reject(data);
						}
					}).
					error(function(data,status,headers,config){
						// alert('Error al Activar su codigo, favor intentarlo nuevamente');
						console.log(data,status,headers,config);
					});
				});
			},
			doSignup: function(sendData){
				return new Promise(function(resolve,reject){
					var url = "http://localhost:9090/register";
					$http({
						method:'POST',
						url:url,
						data: JSON.stringify(sendData),
						headers:{'Content-Type':'application/json'}
					}).
					success(function(data,status,headers,config){
						if(data.status===true){
							localStorage.setItem('user',JSON.stringify(data.data));
							resolve(data.data);
						} else {
							console.log('SOMETHING ELSE',data);
						}
					}).
					error(function(data,status,headers,config){
						// alert('Error al Activar su codigo, favor intentarlo nuevamente');
						console.log(data,status,headers,config);
					});
				});
			},
		}
	}]);