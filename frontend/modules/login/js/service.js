materialAdmin
	.service('loginService',['$state', function($state){
		this.doLogin  = function(email,password,keep_sign_in){
			var sendData = {
				email: email,
				password: password,
				keep_me_sign_in: keep_me_sign_in
			};
			loginFactory.doLogin(sendData)
				.then(function(successData){
					localStorage.setItem('login','true');
					$state.go('home.dashboard');
				});
		};

		this.doLogout = function(){
			localStorage.setItem('login','false');
			$state.go('login');
		};
	}]);