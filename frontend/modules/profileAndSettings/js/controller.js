materialAdmin
    .controller('profileCtrl', ['$scope', 'growlService', '$state', 'getStateBreadcrumbs', function($scope, growlService, $state, getStateBreadcrumbs){
            
            //Get Profile Information from profileService Service
            $scope.states = getStateBreadcrumbs.get();
            console.log($scope.states);
            
            $scope.user = {
                name:'Mr.Kratos',
                avatar: 'img/kratos.jpg',
                company: 'Company',
                enterDate: new Date(),
                link: 'http://codemachine.io',
                profileSummary: "God of war",
                fullName: "Kratos",
                gender: "female",
                birthDay: "some time b.c",
                martialStatus: "Single",
                mobileNumber: "+305777114362",
                email: "kratos@codemachine.io",
                twitter: "@kratosGod",
                twitterUrl: "twitter.com/kratosGod",
                skype: "kratos",
                addressSuite: "44-46 Morningside Road",
                addressCity: "Olympus",
                addressCountry: "Greece",
                extension: '2120',
                orgs: [
                    {
                        name: 'CodeMachine',
                        avatar: 'img/kratos.jpg'
                    }
                ]
            };
                

            //Edit
            $scope.editSummary = 0;
            $scope.editInfo = 0;
            $scope.editContact = 0;
        
            
            $scope.submit = function(item, message) {            
                if(item === 'profileSummary') {
                    $scope.editSummary = 0;
                }
                
                if(item === 'profileInfo') {
                    $scope.editInfo = 0;
                }
                
                if(item === 'profileContact') {
                    $scope.editContact = 0;
                }
                
                growlService.growl(message+' has updated Successfully!', 'inverse'); 
            }
        }])