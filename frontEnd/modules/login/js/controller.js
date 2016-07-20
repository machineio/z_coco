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
	    	email: false,
	    	password: false,
	    	passwordConfirm: false,
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

		var resetWarning = function(){
			$scope.showWarning = {
		    	status: false,
		    	email: false,
		    	password: false,
		    	passwordConfirm: false,
		    	text: ''
		    };	
		};

		var checkForm = function(type){
			console.log('here function');
			switch(type){
				case 'login':
					if(!$scope.models.login.email){
						$scope.showWarning.status = true;
			    		$scope.showWarning.email = true;
			    		$scope.showWarning.text = "Invalid Email, please try again";
			    		return false;
			    		break;
					} else {
						if(!$scope.models.login.password){
							$scope.showWarning.status = true;
				    		$scope.showWarning.password = true;
				    		$scope.showWarning.text = "Please enter your password";
				    		return false;
				    		break;
						} else {
							return true;
							break;
						}
					}

				case 'signup':
					console.log('here signup');
					if(!$scope.models.login.email){
						$scope.showWarning.status = true;
			    		$scope.showWarning.email = true;
			    		$scope.showWarning.text = "Invalid Email, please try again";
			    		return false;
			    		break;
					} else {
						if(!$scope.models.login.password){
							$scope.showWarning.status = true;
				    		$scope.showWarning.password = true;
				    		$scope.showWarning.text = "Please enter a password";
				    		return false;
				    		break;
						} else {
							if(!$scope.models.login.confirmPassword){
								$scope.showWarning.status = true;
					    		$scope.showWarning.passwordConfirm = true;
					    		$scope.showWarning.text = "Please confirm your password";
					    		return false;
					    		break;
							} else {
								if($scope.models.login.password===$scope.models.login.confirmPassword){
									if(!$scope.models.login.accept_license_aggrement){
										$scope.showWarning.status = true;
							    		$scope.showWarning.accept_license_aggrement = true;
							    		$scope.showWarning.text = "Please accept the license aggrement in order to continue";
							    		return false;
							    		break;
									} else {
										return true;
										break;
									}
								} else {
									console.log('here');
									$scope.showWarning.status = true;
									$scope.showWarning.password = true;
						    		$scope.showWarning.passwordConfirm = true;
						    		$scope.showWarning.text = "Password and Confirm Password don't match, please try again.";
						    		return false;
					    			break;
								}
							}
						}
					}

				case 'forgotPassword':
					if(!$scope.models.login.email){
						$scope.showWarning.status = true;
			    		$scope.showWarning.email = true;
			    		$scope.showWarning.text = "Invalid Email, please try again";
			    		return false;
			    		break;
					} else {
						return true;
			    		break;
					}

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
	    	resetWarning();
	    	if(checkForm('signup')){
	    		var sendData = {
		    		email: $scope.models.login.email,
					password: $scope.models.login.password,
					confirmPassword: $scope.models.login.confirmPassword,
					accept_license_aggrement: $scope.models.login.accept_license_aggrement,
		    	}

		    	loginFactory.doSignup(sendData)
					.then(function(successData){
						localStorage.setItem('login','true');
						$state.go('home.dashboard');
					});
	    	}
	    };

	    $scope.doForgotPassword = function(){
	    	resetWarning();
	    	if(checkForm('forgotPassword')){
	    		var sendData = {
	    			email: $scope.models.login.email
	    		}

	    		loginFactory.doForgotPassword(sendData)
	    			.then(function(successData){
	    				$scope.models.login.email = '';
	    				$scope.showWarning.forgotSuccess = true;
	    				$scope.viewStatus.login = 1;
	    				$scope.viewStatus.forgot = 0;
	    			});
	    	}
	    }
	}])