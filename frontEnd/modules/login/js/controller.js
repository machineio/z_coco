materialAdmin
	.controller('loginCtrl', ['$scope', 'loginFactory', '$state', function($scope, loginFactory, $state){
		var userLoggedIn = localStorage.getItem('login');
		if(userLoggedIn==='true'){
			$state.go('home.dashboard');
		}
		//Status
	    $scope.viewStatus = {
	        login: 0,
	        register: 1,
	        forgot: 0
	    }
	    $scope.showWarning = {
	    	status: false,
	    	text: ''
	    };
		$scope.models = {
			login:{
				email: '',
				password: '',
				keep_me_sign_in: false,
				confirmPassword: '',
				accept_license_aggrement: false,
			}
		};

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
	    };

	    $scope.doSignUp = function(){
	    	if($scope.models.login.password===$scope.models.login.confirmPassword){
	    		var sendData = {
		    		email: $scope.models.login.email,
					password: $scope.models.login.password,
					confirmPassword: $scope.models.login.confirmPassword,
					accept_license_aggrement: $scope.models.login.accept_license_aggrement,
		    	}

		    	loginFactory.doLogin(sendData)
					.then(function(successData){
						localStorage.setItem('login','true');
						$state.go('home.dashboard');
					});
	    	} else {
	    		$scope.showWarning.status = true;
	    		$scope.showWarning.text = "Password and Confirm Password don't match, please try again.";
	    	}
		    	
	    };
	}])