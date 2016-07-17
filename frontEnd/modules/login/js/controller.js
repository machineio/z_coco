materialAdmin
	.controller('loginCtrl', ['$scope', 'loginFactory', '$state', function($scope, loginFactory, $state){
		var userLoggedIn = localStorage.getItem('login');
		if(userLoggedIn==='true'){
			$state.go('home.dashboard');
		}
		$scope.models = {
			login:{
				email: '',
				password: '',
				keep_me_sign_in: false
			}
		};
	    //Status
	    $scope.viewStatus = {
	        login: 1,
	        register: 0,
	        forgot: 0
	    }

	    $scope.submitLogin = function(){
	    	var sendData = {
				email: $scope.models.login.email,
				password: $scope.models.login.password,
				keep_me_sign_in: $scope.models.login.keep_me_sign_in
			};
			loginFactory.doLogin(sendData)
				.then(function(successData){
					localStorage.setItem('login','true');
					$state.go('home.dashboard');
				});
	    }
	}])