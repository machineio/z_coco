materialAdmin

    .controller('homeCtrl',['$scope', '$window', '$filter', '$sce', 'ngTableParams', 'tableService', 'mailgunFactory', function($scope, $window, $filter, $sce, ngTableParams, tableService, mailgunFactory){
        $scope.user = JSON.parse(localStorage.getItem('user'));
        console.log('USER',$scope.user);

        mailgunFactory.getDomains()
            .then(function(domainsData){
                console.log('DOMAINS', domainsData);
            });


        var data = tableService.data;

        var ctx = document.getElementById("myChart");
        var ctx2 = document.getElementById("myChart2");

        $scope.drawChart1 = function(){
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Campaign 1", "Campaign 2", "Campaign 3"],
                    datasets: [
                        {
                            label: 'Outgoing',
                            data: [100, 20000, 3000],
                            backgroundColor: '#e6e6e6',
                            borderColor: '#FFFFFF',
                            borderWidth: 1
                        },
                        {
                            label: 'Sended',
                            data: [23000, 2500, 5000],
                            backgroundColor: '#8BC34A',
                            borderColor: '#4CAF50',
                            borderWidth: 1
                        },
                        {
                            label: 'Dropped',
                            data: [500, 4, 0],
                            backgroundColor: '#F44336',
                            borderColor: '#FFFFFF',
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    // scales: {
                    //     yAxes: [{
                    //         ticks: {
                    //             beginAtZero: false
                    //         }
                    //     }]
                    // }
                }
            });
        };

        $scope.drawChart2 = function(){
            var myChart2 = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ["Campaign 1", "Campaign 2", "Campaign 3"],
                    datasets: [
                        {
                            label: 'Outgoing',
                            data: [100, 20000, 3000],
                            backgroundColor: '#e6e6e6',
                            borderColor: '#FFFFFF',
                            borderWidth: 1
                        },
                        {
                            label: 'Sended',
                            data: [23000, 2500, 5000],
                            backgroundColor: '#8BC34A',
                            borderColor: '#4CAF50',
                            borderWidth: 1
                        },
                        {
                            label: 'Dropped',
                            data: [500, 4, 0],
                            backgroundColor: '#F44336',
                            borderColor: '#FFFFFF',
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    // scales: {
                    //     yAxes: [{
                    //         ticks: {
                    //             beginAtZero: false
                    //         }
                    //     }]
                    // }
                }
            });
        };
    }])